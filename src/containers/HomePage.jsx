import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop');
  };

  return (
    <Box sx={{backgroundColor: '#f5f5f5'}}>
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to our Mobile Shop
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover the latest smartphones and accessories.
      </Typography>
      <Box
        sx={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ marginBottom: '15px' }} variant="h5" gutterBottom>
          Explore Our Collection
        </Typography>
        <ButtonComponent
          content={'Shop now'}
          variant="contained"
          color="primary"
          handleClick={handleClick}
          sx={{ textTransform: 'none' }} // Adjusting button style
        />
      </Box>
    </Container>
    </Box>
  );
};

export default HomePage;
