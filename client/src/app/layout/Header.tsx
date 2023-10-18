import { AppBar, Badge, Box, IconButton, List, ListItem, Theme, Toolbar, Typography, colors } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface HeaderProps {
    onChange: () => void;
    darkMode: Boolean;
  }

const middleLinks = [
    {title: "catalog", path: "/catalog"},
    {title: "about", path: "/about"},
    {title: "contact", path: "/contact"} 
];
const rightLinks = [
    {title: "login", path: "/login"},
    {title: "register", path: "/register"}
];
const navStyles = {
    typography: 'h5',
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500',
    },
    '&.active': {
        color: '#3a3bc9',
    },
};

export default function Header(props: HeaderProps) {
    return(
    <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <Box display='flex' alignItems='center' >
                <Typography sx={navStyles} variant="h5" component={NavLink} to="/" >
                    Store
                </Typography>
                <IconButton sx={{ ml: 1 }} onClick={props.onChange} color="inherit">
                    {props.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>

            <List sx={{ display:'flex' }}>
            {middleLinks.map(({title,path}) => (
                <ListItem sx={navStyles} component={NavLink} to={path} key={path}>
                    {title.toUpperCase()}
                </ListItem>
            ))}
            </List>

            <Box display='flex' alignItems='center'>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
                <List sx={{ display:'flex' }}>
                    {rightLinks.map(({title,path})=>(
                        <ListItem sx={navStyles} component={NavLink} to={path} key={path}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Toolbar>
    </AppBar>
    );
}