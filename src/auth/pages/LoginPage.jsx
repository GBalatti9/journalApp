import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();
    const { email, password, onInputChange, formState } = useForm(formData);

    const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log({ email, password });
        console.log({ formState });
        dispatch( startLoginWithEmailPassword(formState) )
    }

    const handleGoogleSignIn = () => {
        dispatch( startGoogleSignIn() );
        console.log('handle google singn in');
    }

    return (


        <AuthLayout title='Login' >
            <form onSubmit={ handleSubmit } className='animate__animated animate__fadeIn animate__faster' >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Email'
                            type="email"
                            placeholder="mail@gmail.com"
                            fullWidth 
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                            />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type="password"
                            placeholder="Contraseña"
                            fullWidth 
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                            />
                    </Grid>

                    <Grid container display={ !!errorMessage ? '' : 'none' } sx={{ mt: 1 }}>
                        <Grid item xs={ 12 } >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                disabled={ isAuthenticating }
                                type="submit" 
                                variant="contained" 
                                fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                                disabled={ isAuthenticating }
                                onClick = { handleGoogleSignIn } 
                                variant = "contained" 
                                fullWidth
                                >
                                <Google />
                                <Typography sx={{ ml: 1 }} variant="p"> Google </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link
                            component={RouterLink}
                            color='inherit'
                            to='/auth/register'>
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
