import { Box } from "@mui/material"
import { Navbar } from "../components";

const drawerWitdh = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar />

            {/* Sidebar */}

            <Box 
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
                >

                {/* Toolbar */}

                { children }
            </Box>
        </Box>
    )
}
