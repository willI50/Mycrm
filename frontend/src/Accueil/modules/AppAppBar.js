import * as React from 'react';
import Box from '@mui/material/Box';
import {  Link  } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import "../Accueilstyle.css"
import { Button } from 'reactstrap';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <div className='logo' >
            {'CamerStart'}
            </div>
      
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              to="/Login"
              sx={rightLink}
            >
               <Button className='btn-warning' >

              Sign In
              </Button>
            </Link>
            </Box>
            
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              to="/Inscription"
              sx={rightLink}
            >
               <Button  className='btn-warning'>

              Sign up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;