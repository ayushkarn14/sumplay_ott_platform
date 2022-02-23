import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import "../css/header.css"

export default function Header(props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar className="sum-header" position="static">
                <Toolbar>
                    <Link to={""} style={{textDecoration: "none"}}>
                        <Box sx={{display: {md: 'flex'}}}>
                            <img src={"assets/svg/sumplay.svg"} alt="Logo" height={30}/>
                        </Box>
                    </Link>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <Search id='search'>
                            <div className='sum-key-icon'>
                                <div onClick={() => {
                                    console.log("Aaaaaaa")
                                }}>
                                    <SearchIcon/>
                                </div>
                            </div>
                            <StyledInputBase
                                placeholder="Search..."
                                inputProps={{'aria-label': 'search'}}
                                onKeyDown={(e) => {
                                    console.log("aa")
                                }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {md: 'flex'}}} style={{
                        marginRight: "2vw"
                    }}>
                        <Box sx={{display: {xs: 'none', md:"flex"}}}>
                            <button className='sum-header-button' onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                toast("Sharing URL copied to clipboard");
                                console.log(window.location.host);
                            }
                            }>Account
                            </button>
                        </Box>
                        <button className='sum-header-more-button' onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            toast("Sharing URL copied to clipboard");
                            console.log(window.location.host);
                        }}><MenuIcon/></button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

//style for the search bar
export const Search = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    position: 'relative',
    borderRadius: "50px",
    backgroundColor: alpha(theme.palette.common.white, 0.4),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.6),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

//style for the search input
export const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '40ch',
            '&:focus': {
                width: '45ch',
            },
        },
    },
}));