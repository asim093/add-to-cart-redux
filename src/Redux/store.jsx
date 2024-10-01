import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/Addtocart'; 

const store = configureStore({
    reducer: {
        cart: cartReducer, 
    },
});

export default store;
