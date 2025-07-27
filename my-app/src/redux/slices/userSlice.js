import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},   // {id: // token: //}
    profile: {},
    token: null,
    wishlist: [],
    cart: [],
    orders: [],
    address: [],
    productlist: false
}


const userSlice = createSlice({
    name: 'user-slice',
    initialState,

    reducers: {

        userLogIn: (state, action) => {
            state.user = action.payload
            // state.token = action.payload.token
        },

        userSignUp: (state, action) => {
            state.user = action.payload
            // state.token = action.payload.token
        },

        userProfile: (state, action) => {
            state.profile = action.payload
            // state.wishlist = action.payload.wishlist || []
            state.wishlist = action.payload.wishlistItems || []
            // state.cart = action.payload.cart || []
            state.cart = action.payload.cartItems || []
            // state.orders = action.payload.orders || []
            state.orders = action.payload.Orders || []
            state.address = action.payload.Addresses || []
        },

        addNewAddress: (state, action) => {
            // state.address = action.payload.address
            state.address = action.payload
        },

        addToWishlist: (state, action) => {
            state.wishlist = state.wishlist.length
                ? [...state.wishlist, action.payload]
                : [action.payload]
        },

        removeFromWishlist: (state, action) => {
            if (state.wishlist.length) {
                const existWishlist = state.wishlist.filter(
                    (item) => item.id !== action.payload.id
                )
                state.wishlist = existWishlist
            } else {
                state.wishlist = []
            }
        },

        addToCart: (state, action) => {
            let existingCart = state.cart

            if (existingCart.length) {
                const existItem = existingCart.filter(
                    (product) => product.id === action.payload.id
                )

                if (existItem.length) {
                    const index = existingCart.indexOf(existItem[0])
                    existingCart[index] = action.payload

                    state.cart = existingCart
                } else {
                    state.cart = [...state.cart, action.payload]
                }


            } else {
                state.cart = [action.payload]
            }
        },

        removeFromCart: (state, action) => {
            let currentCart = state.cart
            if (currentCart.length) {
                const existItem = currentCart.filter(
                    (product) => product.id !== action.payload.id
                )

                state.cart = existItem
            } else {
                state.cart = []
            }
        },

        placeOrder: (state, action) => {
            state.orders = [action.payload, ...state.orders]
            state.cart = []
        },

        checkProductList: (state, action) => {
            state.productlist = action.payload
        }

    },
})


export const { userLogIn, userSignUp, userProfile, addNewAddress, addToWishlist, removeFromWishlist,
    addToCart, removeFromCart, placeOrder,checkProductList
} = userSlice.actions
export default userSlice.reducer