import React from 'react';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = ({image,title,description,price}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt={title}  
        height="200"
        image={image}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={{ height: '100px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button
          size="small"
          variant="contained" 
          color="primary"     
          sx={{ borderRadius: '8px' }} 
        >Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;