

import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { startNewNorte } from "../../store/journal";


export const JournalPage = () => {

    const { isSaving, active } = useSelector(( state ) => state.journal );
    const dispatch = useDispatch();

    const handleClickNewNote = () => {
        dispatch( startNewNorte() );
    }

    return (
        <JournalLayout>
            {
                (!!active)
                ? <NoteView />
                : <NothingSelectedView />
            }

            <IconButton
                onClick={ handleClickNewNote }
                size="large"
                disabled={ isSaving }
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}>
                    <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    )
}
