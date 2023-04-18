import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },

        cartItemsNo: (state, action) => {
            state.amount = action.payload
        },

        totalCartPrice: (state, action) => {
            state.total = action.payload
        },

        increaseCartItem: (state, { payload }) => {
            const itemId = payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId)
            cartItem.amount = cartItem.amount + 1
        },

        decreaseCartItem: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.map((item) => item.id === itemId)
            cartItem.item.amount = cartItem.item.amount - 1
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }
    }
})

console.log(cartSlice);

export const { clearCart, cartItemsNo, totalCartPrice, increaseCartItem, decreaseCartItem, removeItem } = cartSlice.actions
export default cartSlice.reducer;

