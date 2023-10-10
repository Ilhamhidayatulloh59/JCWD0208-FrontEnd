import { Box, Button, TextField, Typography } from "@mui/material"

export const DetailPage = () => {
    return (
        <Box>
            <Typography>
                INI DETAIL PAGE
            </Typography>
            <TextField label="username" type='text' fullWidth />
            <Button variant='contained' >Submit</Button>
        </Box>
    )
}