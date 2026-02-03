import { createSlice } from "@reduxjs/toolkit";
 const productslice=createSlice({
    name:'prodslice',
    initialState:{
        projecttitle:'create',
        prodsliceItems:[
            {
                title:'Games',
                model:'2025',
                color:'Beige white',
                type:'BMW'
            },
            {

               title:'Games',
                model:'2025',
                color:'Sky Blue',
                type:'Audi'

            }



            
        ]
        
    }
    
})

export default productslice.reducer
 