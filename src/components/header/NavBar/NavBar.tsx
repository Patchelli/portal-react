import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DRAWER_WIDTH } from '../../../constants/layout';
import Profile from '../Profile/Profile';
import { Box } from '@mui/material';

interface NavBarProps extends MuiAppBarProps {
  open?: boolean;
  toggleDrawer?: () => void;
  menuName?: string;
  actions?: React.ReactNode;
  userName?: string;
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })<NavBarProps>(({ theme, open }) => 
({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar: React.FC<NavBarProps> = ({ open, toggleDrawer, menuName, actions, userName }) => {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
        
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{  display: { xs: 'none', sm: 'block' } }}
        >
          {menuName}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{  display: { xs: 'none', md: 'flex' } }}
        >
        
          <Profile userName={userName}/>
        </Box>
        {actions}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;