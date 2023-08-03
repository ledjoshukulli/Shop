import { createContext } from "react";
import React from 'react';

export const ShopContext =createContext();

export const ShopProvider = ({children}) => {


  return (
        <ShopContext.Provider
        value={{

        }

        }
        >

            {children}
        </ShopContext.Provider>
    )
}
