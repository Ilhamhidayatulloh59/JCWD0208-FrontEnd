import { Box } from "@mui/material"

export const ErrorPage = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            fontSize: '50px',
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            PAGE NOT FOUND !
        </Box>
    )
}