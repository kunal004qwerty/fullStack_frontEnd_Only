import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    categories: [],
    currentProduct: false,
}

const shoppingSlice = createSlice({
    name: "shopping-slice",
    initialState,
    reducers: {

        landingProducts: (state, action) => {
            // state.products = action.payload.products
            state.products = action.payload
            // state.categories = action.payload.categories
        },

        productsDetails: (state, action) => {
            state.currentProduct = action.payload
        }
    }
})

export const { landingProducts, productsDetails } = shoppingSlice.actions
export default shoppingSlice.reducer