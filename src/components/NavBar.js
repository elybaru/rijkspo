import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import { Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


function NavBar() {
    return (
        <div>
            <AppBar color="primary" position="relative">
                <Container>
                    <Toolbar>
                        <Box>
                            <h1>Rijkspo</h1>
                        </Box>
                        <Box>
                            <Button variant="text"> <NavLink to="/">
                                Home
                                </NavLink>
                            </Button>
                            <Button variant="text">
                                <NavLink to="/search">Search</NavLink>
                            </Button>
                            <Button variant="text">
                                <NavLink to="/favorites">Favorites</NavLink>
                            </Button>
                            <Button variant="text">
                                <NavLink to="/visitorlog">Visitor Log</NavLink>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default NavBar;