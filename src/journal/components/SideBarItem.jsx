import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal";


export const SideBarItem = ({ title, body, id }) => {

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0,17) + '...' : title;
    }, [ title ]);

    const dispatch = useDispatch();
    const { notes } = useSelector( state => state.journal );

    const handleClick = () => {
        const actualNote = notes.find(( note ) => note.id === id);
        dispatch(setActiveNote( actualNote ));
    }

    return (
        <ListItem key={ id } disablePadding>
            <ListItemButton onClick={ handleClick }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container sx={{ display: 'flex', direction: 'column' }}>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
