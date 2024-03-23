import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 export const fetchproduct= createAsyncThunk("productsslice/fetchproducts",async()=>{
   const res=await fetch("https://fakestoreapi.com/products");
   const data =await res.json();
   return data
})
 const productsslice= createSlice({
    initialState:[],
    name:"proudctsslice",
    reducers:{},
    extraReducers:(builder)=>
    {
        builder.addCase(fetchproduct.fulfilled,(state,actions)=>{
            return actions.payload
        })
    }
}
 )
 export const{}=productsslice.actions;
 export default productsslice.reducer;