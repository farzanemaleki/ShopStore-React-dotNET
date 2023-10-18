import { AppBar, IconButton, Theme, Toolbar, Typography } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
    onChange: () => void;
    darkMode: Boolean;
  }

export default function Header(props: HeaderProps) {
    return(
    <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
            <Typography variant="h5">
                Store
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={props.onChange} color="inherit">
                {props.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Toolbar>
    </AppBar>
    );
}