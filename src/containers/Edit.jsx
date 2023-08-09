import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Grid, Container } from '@mui/material';
import productsData from "../data/Products";
import CardComponent from '../components/CardComponent';
import Navbar from '../components/Navbar';

const Edit = () => {
  const { productId } = useParams();
  const numericProductId = parseInt(productId, 10);
  const [product, setProduct] = useState();
  const [editedProduct, setEditedProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedProduct = productsData.find(product => product.id === numericProductId);
    setProduct(fetchedProduct);
    setEditedProduct(fetchedProduct);
  }, [numericProductId]);

  const handleFieldChange = (field, value) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  if (!product || !editedProduct) {
    return <div>Loading...</div>;
  }

  const handleSave = (e) => {
    e.preventDefault();

    setProduct(editedProduct);
    navigate('/shop/manager');
  };

  return (
    <div>
    <Navbar />
    <Container sx={{marginTop:"60px"}}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <CardComponent
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <form>
            <div>
              <TextField
                label="Product ID"
                value={editedProduct.id}
                InputProps={{ readOnly: true }}
                sx={{ width: '100%', marginBottom: '10px' }}
              />
              <TextField
                label="Image"
                value={editedProduct.image}
                onChange={(e) => handleFieldChange("image", e.target.value)}
                sx={{ width: '100%', marginBottom: '10px' }}
              />
              <TextField
                label="Title"
                value={editedProduct.title}
                onChange={(e) => handleFieldChange("title", e.target.value)}
                sx={{ width: '100%', marginBottom: '10px' }}
              />
              <TextField
                rowsMin={3}
                label="Description"
                value={editedProduct.description}
                onChange={(e) => handleFieldChange("description", e.target.value)}
                sx={{ width: '100%', marginBottom: '10px' }}
              />
              <TextField
                type="number"
                label="Price"
                value={editedProduct.price}
                onChange={(e) => handleFieldChange("price", e.target.value)}
                sx={{ width: '100%', marginBottom: '10px' }}
              />
              <Button variant="contained" color="primary" type="submit" onClick={handleSave}>
                Save
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Edit;
