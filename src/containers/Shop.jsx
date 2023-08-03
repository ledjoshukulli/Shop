import React from "react";
import CardComponent from "../components/CardComponent";
import products from "../data/Products";
import Navbar from "../components/Navbar";

const Shop = () => {
  return (
    
    <div className="App"><div><Navbar></Navbar></div>
      {products.map((product) => (
        <CardComponent
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        ></CardComponent>
      ))}
    </div>
  );
};

export default Shop;
