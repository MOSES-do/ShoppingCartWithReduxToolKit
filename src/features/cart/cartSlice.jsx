import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { openModal } from '../modal/modalSlice';


const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
    try {
        // console.log(thunkAPI)
        // console.log(thunkAPI.getState())

        const resp = await axios(url)
        return resp.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue('')
    }
})
const initialState = {
    cartItems: [],
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
            const cartItem = state.cartItems.find((item) => item.id === itemId)
            cartItem.amount = cartItem.amount - 1
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }
    },

    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false

        }
    }
})

// console.log(cartSlice);

export const { clearCart, cartItemsNo, totalCartPrice, increaseCartItem, decreaseCartItem, removeItem } = cartSlice.actions
export default cartSlice.reducer;

