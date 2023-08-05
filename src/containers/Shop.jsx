import React, { useState } from "react";
import CardComponent from "../components/CardComponent";
import products from "../data/Products";
import Navbar from "../components/Navbar";
import { Container, Grid, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ITEMS_PER_PAGE = 6;

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the products array to show only the products for the current page
  const productsToShow = products.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <Navbar />
      <Container sx={{ paddingTop: "20px", marginLeft: "110px" }}>
        <Grid container spacing={2}>
          {productsToShow.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <CardComponent
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
        <div style={{ marginLeft:"35%", marginTop: '25px',marginBottom:"25px" }}>
          <Pagination
            count={Math.ceil(products.length / ITEMS_PER_PAGE)} 
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            renderItem={(item) => (
              <PaginationItem
                component="div"
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </div>
      </Container>
    </div>
  );
};

export default Shop;
