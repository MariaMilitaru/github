import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
// import SearchIcon from '@mui/icons-material/Search';
// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));
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
                    {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                    <Button color="inherit" style={{ fontSize: '23px' }}>Search </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}