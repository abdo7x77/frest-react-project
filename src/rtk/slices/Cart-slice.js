import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
  initialState: [],
  name: "cartslice", 
  reducers: {
    addToCart: (state, action) => {
      const findProduct =state.find((product)=>product.id ===action.payload.id )
      if(findProduct){
        findProduct.quantity +=1
      }else{
        const productclone={...action.payload, quantity:1}
        state.push(productclone);
      }
      
    },
    deleteFromCart: (state, action) => {
      return state.filter((product)=>product.id!==action.payload.id)
    },
    clear: (state, action) => {
      return []
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartslice.actions;
export default cartslice.reducer; 