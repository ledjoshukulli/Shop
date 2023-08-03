// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Typography>
          <div sx={{ display: 'flex' }}>
            <Button color="inherit" component={Link} to="/shop/manager" sx={{ marginRight: '10px' }}>
              Manager
            </Button>
            <Button color="inherit" component={Link} to="/shop/cart" sx={{ marginRight: '10px' }}>
              Cart
            </Button>
            <Button color="inherit" component={Link} to="/shop/user">
              <PersonIcon />
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
