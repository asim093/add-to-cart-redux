import { createSlice } from '@reduxjs/toolkit';

const AddtoCart = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); 
            }
        },
        removeCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
});

export const { addCart, removeCart, clearCart } = AddtoCart.actions;

export default AddtoCart.reducer;
