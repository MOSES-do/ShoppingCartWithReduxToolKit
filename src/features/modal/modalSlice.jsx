import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    isOpen: true
}


const modalSlice = createSlice({
    name: "modal",
    initialState,

    reducers: {
        openModal: (state, action) => {
            state.isOpen = false
        },
        closeModal: (state, action) => {
            state.isOpen = true
        },

    }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;