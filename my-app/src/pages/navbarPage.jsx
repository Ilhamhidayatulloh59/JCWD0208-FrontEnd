import { Box } from "@mui/material"
import { Navbar } from "../components/navbar"
import { Outlet } from 'react-router-dom'
import { Footer } from "../components/footer"

export const NavbarPage = () => {
    return (
        <Box>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    )
}