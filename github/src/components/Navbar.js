import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 2 }} >
            <AppBar position="static" sx={{ bgcolor: "#2E3B55" }}>
                <Toolbar >
                    <Link to="/">
                        <IconButton
                            size="inherit"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                    </Link>
                    <Typography variant="h4" color="inherit" component="div">
                        Github
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Button color="inherit" style={{ fontSize: '23px' }}>Search </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}