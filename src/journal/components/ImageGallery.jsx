import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";


export const ImageGallery = ({ images }) => {

    return (
            images.length > 0
                ? <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={164}>
                    {
                        images.map(( item, i ) => (
                            <ImageListItem key={ i + item }>
                                <img
                                    srcSet={`${ item }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    alt='Imagen de la nota'
                                    loading="lazy"
                                />
                        </ImageListItem>
                        ))
                    }
                </ImageList>
                : <p>Upload Images...</p>
    );
}