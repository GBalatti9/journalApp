import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>

            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'> 14 de enero, 2024 </Typography>
            </Grid>
            
            <Grid item>
                <Button color="primary" sx={{ p: 2 }}>
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
                    fullWidth
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField 
                    type="text"
                    variant="filled"
                    placeholder="¿Qué sucedió hoy?"
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