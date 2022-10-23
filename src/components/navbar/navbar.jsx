import React, { useState } from "react";
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import './navbar.css';
import { Container, AppBar, Toolbar, Typography, Box, IconButton, MenuItem, Menu, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
    const pages = [{ name: "Home", route: "/" },{ name: "About", route: "/about" }, { name: "Services", route: "/services" }, { name: "Weather", route: "/weather" }, { name: "News", route: "/news" }];
    const [anchorElNav,setAnchor] = useState(null);

    const openNavMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    const closeNavMenu = (_) => {
        setAnchor(null);
        console.log(_.key);

    };

    return (
        <div className="navContainer">
            <AppBar
        className="nav"
        position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            onClick={openNavMenu}
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                        <MenuIcon key={"Menu-icon"} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={closeNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link to={page.route} className="link menu-item" key={page.name}>
                                    <MenuItem key={page.name} onClick={closeNavMenu}>
                                        {page.name}
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
            
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={page.route} className="link" key={page.name}>
                                <Button sx={{ my: 2, color: "white", display: 'block' }} onClick={closeNavMenu} key={page.name}>
                                    {page.name}
                                </Button>
                            </Link>
                            
                        ))}
                       
                    </Box>
                </Toolbar>
            </Container>
        </AppBar></div>
    );
}

export default Navbar;