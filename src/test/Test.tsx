import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NavBar from '../components/header/NavBar';
import MenuDrawer from '../components/header/MenuDrawer';
import { listItems } from './testListItems';
import StickyFooter from '../components/footer/StickyFooter';
import { Profile } from '../components';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#e1dfdd',
      dark: '#afadab',
      contrastText: '#53565a',
    },
    secondary: {
      light: '#7f8387',
      main: '#53565a',
      dark: '#2a2d31',
      contrastText: '#ffffff',
    },
    success: {
      main: '#1ABC31'
    },
    warning: {
      main: '#FFA000'
    },
    error: {
      main: '#BF2012'
    }
  },
});


function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar toggleDrawer={toggleDrawer} userName={"Veronica Taborda"} open={open} menuName={"TESTE"}/>
        <MenuDrawer toggleDrawer={toggleDrawer} open={open} menuList={listItems} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <StickyFooter />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}