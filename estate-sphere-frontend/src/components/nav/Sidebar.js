import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EstateSphere
          </Typography>
          <NavLink className="nav-link" to="/dashboard" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Dashboard</NavLink>
          <NavLink className="nav-link" to="/ad/create" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Create Ad</NavLink>
          <NavLink className="nav-link" to="/user/profile" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>User Profile</NavLink>
          <NavLink className="nav-link" to="/user/settings" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Settings</NavLink>
          <NavLink className="nav-link" to="/user/wishlist" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Wishlist</NavLink>
          <NavLink className="nav-link" to="/user/enquiries" style={{ color: 'inherit', textDecoration: 'none' }}>Enquired Properties</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
