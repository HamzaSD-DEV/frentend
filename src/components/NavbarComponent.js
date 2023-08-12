import * as React from 'react';
import {useState} from 'react';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

import {useSelector} from "react-redux";
import {selectLogin} from "../features/login/loginSlice";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerComponent from "./DrawerComponent";
import { Theme } from "@mui/material/styles";

const pages = ['Home', 'NewCars', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavbarComponent() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [trigger, setTrigger] = useState(0);

    const isLogged = useSelector(selectLogin);
    let a = isLogged ? 'flex' : 'none';
    return (
        <Box>
            <AppBar position="fixed"
                    sx={{backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'row', zIndex: (theme: Theme)=>theme.zIndex.drawer}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <IconButton>
                        <ChevronRightIcon onClick={() => {
                            setTrigger((trigger) => trigger + 1);
                        }}/>
                    </IconButton>
                </Box>

                <Container maxWidth="xl">

                    <Toolbar disableGuttersy>

                        <DriveEtaIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1,}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 1,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            ALLCARS
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
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
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},

                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <DriveEtaIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            ALLCARS
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            display: {xs: 'none', md: 'flex'},
                            mr: 2,
                        }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 0.75, color: 'black', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{display: !isLogged ? {xs: 'none', md: 'flex'} : 'none'}}>
                            <Button variant="contained" color="error"
                            >Sell your car!</Button>
                        </Box>
                        <Box sx={{display: !isLogged ? 'flex' : 'none'}}>
                            <Button color="inherit">Login</Button>
                        </Box>
                        <Box sx={{display: a}}>
                            <Box sx={{minWidth: 130}}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"

                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon/>
                                    </Badge>
                                </IconButton>
                            </Box>

                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px', color: 'text'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu} color="black">
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            <DrawerComponent trigger={trigger}/>
        </Box>

    );
}

export default NavbarComponent;
