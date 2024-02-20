import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useMemo, useEffect } from "react"
import { setActiveNote } from "../../store/journal";
import { startSavingNote } from '../../store/journal';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';


export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );
    const { body, title, date, formState, onInputChange } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ])

    useEffect(() => {
        dispatch( setActiveNote( formState ) )
    }, [ formState ])

    const handleSaveNote = () => {
        dispatch( startSavingNote() );
    }

    useEffect(() => {

        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }

    }, [ messageSaved ])
    

    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }} >

            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
            </Grid>
            
            <Grid item>
                <Button color="primary" sx={{ p: 2 }} onClick={ handleSaveNote } disabled={ isSaving }>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    placeholder="Ingrese un titulo"
                    label="Título"
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                    fullWidth
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField 
                    type="text"
                    variant="filled"
                    placeholder="¿Qué sucedió hoy?"
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                    fullWidth
                    multiline
                    sx={{ border: 'none', mb: 1 }}
                    minRows={ 5 }
                />
            </Grid>
            <ImageGallery />
        </Grid>
    )
}
