import { Box } from '@mui/material'

export const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            width: '100vw',
            height: '100px',
            bgcolor: 'teal',
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '50px'
        }}>
            INI FOOTER
        </Box>
    )
}