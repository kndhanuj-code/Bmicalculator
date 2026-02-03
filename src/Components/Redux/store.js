import { configureStore } from "@reduxjs/toolkit";
import  addproduct from './productslice'

export const store=configureStore(
    {
        reducer :{
            prodslice:addproduct,
           

        }
    }
)
