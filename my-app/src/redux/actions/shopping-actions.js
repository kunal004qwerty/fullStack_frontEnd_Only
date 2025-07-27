import { DeleteData, GetData, PostData, PutData } from "@/backend/clinet";
import { API_VERSION, ENDPOINT } from "@/backend/endpoints";
import { landingProducts, productsDetails } from "../slices/shoppingSlice";
import { addNewAddress, addToCart, addToWishlist, placeOrder, removeFromCart, removeFromWishlist } from "../slices/userSlice";



export const onGetProducts = (payload) => async (dispatch) => {
    try {

        const response = await GetData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/`)

        console.log(response.data);


        return dispatch(landingProducts(response.data))

    } catch (error) {
        console.log(error);

    }
}


export const OnGetProductDetails = (id) => async (dispatch) => {
    try {
        const response = await GetData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/${id}`)
        return dispatch(productsDetails(response.data))
    } catch (error) {
        console.log(error);

    }
}

// ------------------- WISHLIST --------------------------------------

export const onAddToWishList = (id) => async (dispatch) => {
    try {
        const response = await PutData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/wishlist`, true, { id })
        console.log(response);

        return dispatch(addToWishlist(response.data))
    } catch (error) {
        console.log(error);

    }
}

export const onRemoveFromWishList = (id) => async (dispatch) => {
    try {
        const response = await DeleteData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/wishlist/${id}`, true,)
        console.log(response);

        return dispatch(removeFromWishlist(response.data))
    } catch (error) {
        console.log(error);

    }
}


// ------------------- Cart --------------------------------------
export const onAddToCart = ({ id, qty }) => async (dispatch) => {
    try {
        const response = await PutData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/cart`, true, { id, qty })
        console.log(response.data);

        return dispatch(addToCart(response.data))
    } catch (error) {
        console.log(error);

    }
}

export const onRemoveFromCart = (id) => async (dispatch) => {
    try {
        const response = await DeleteData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/cart/${id}`, true)
        console.log(response.data);

        return dispatch(removeFromCart(response.data))
    } catch (error) {
        console.log(error);

    }
}

export const onCreateAddress = (ObjBody) => async (dispatch) => {
    try {
        const response = await PostData(`/api/${API_VERSION}${ENDPOINT.ADDRESS}`, true, ObjBody)

        console.log("response", response.data.user);


        // return dispatch(addNewAddress(response.data.user))
    } catch (error) {
        console.log(error);

    }
}

export const onPlaceOrder = ({ txnId }) => async (dispatch) => {
    try {
        const response = await PostData(`/api/${API_VERSION}${ENDPOINT.ORDER}`, true, { txnNumber: txnId })
        console.log(response.data.data);

        return dispatch(placeOrder(response.data.data.order))

    } catch (error) {
        console.log(error);

    }
}