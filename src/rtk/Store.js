import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/Products-slice";
import CartSlice from "./slices/Cart-slice";

export const store=configureStore({
    reducer:{
        products: ProductsSlice,
        cart: CartSlice 
        
    }
}
);
// export default store