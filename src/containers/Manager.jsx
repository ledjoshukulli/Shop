import React, { useContext, useState } from "react";
import CardComponent from "../components/CardComponent";
import Navbar from "../components/Navbar";
import { Button, Container, Grid, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";


const ITEMS_PER_PAGE = 6;

const Manager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {handleDelete,products}=useContext(ShopContext);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const productsToShow = products.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };


  
  const navigate = useNavigate(); 

  const handleEdit = (productId) => {

    navigate(`/shop/edit/${productId}`);
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
                buttonContent={[
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: '8px' }}
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </Button>,
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    sx={{ borderRadius: '8px' }}
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                ]}
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

export default Manager;
