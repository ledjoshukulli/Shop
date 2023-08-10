import { createContext, useState } from "react";
import React from 'react';
import productsData from "../data/Products";

export const ShopContext =createContext();

export const ShopProvider = ({children}) => {
    const [products, setProducts] = useState(productsData);

   
    const handleDelete = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
      };

      const handleEdit = (editedProduct) => {
        const updatedProducts = products.map(product => {
            if (product.id === editedProduct.id) {
                return {
                    ...product,
                    ...editedProduct
                };
            }
            return product;
        });
        setProducts(updatedProducts);
    };



  return (
        <ShopContext.Provider
        value={{
            handleDelete,
            products,
            handleEdit
        }

        }
        >

            {children}
        </ShopContext.Provider>
    )
}
