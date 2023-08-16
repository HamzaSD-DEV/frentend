import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Container, Tooltip} from "@mui/material";
import SearchInput from "./SearchInputComponent";
import SearchIcon from '@mui/icons-material/Search';
import {useEffect} from "react";
import CheckboxesGroup from "./CheckboxesGroup";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

// function DeleteIcon() {
//     return null;
// }


export default function DrawerComponent({trigger}) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (trigger) {
           handleDrawerOpen();
        }
    }, [trigger]);
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="static" open={open} sx={{backgroundColor: 'white', color: 'black'}}>
                <Container maxWidth="xl" sx={{ display: 'flex' ,justifyContent: 'center',}}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 0,
                        m: 0.5,
                    }}>

                            <SearchInput sx={{
                                paddingLeft:1,
                            }}/>
                            <Tooltip title="Search">
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    sx={{mr: 2, ...(open && {display: 'none'})}}
                                >
                                    <SearchIcon fontSize="large"/>
                                </IconButton>
                            </Tooltip>
                    </Box>

                </Container>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {['Marque', 'Model', 'Annee', 'Prix'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Puissance', 'Première main', 'Etat'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <CheckboxesGroup/>
            </Drawer>
        </Box>
    );
}
