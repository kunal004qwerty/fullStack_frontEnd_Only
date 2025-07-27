
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './slices/counterSlice'
import userReducer from "./slices/userSlice"
import shoppingReducer from "./slices/shoppingSlice"
import { Provider } from "react-redux"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        shopping: shoppingReducer
    }
})

// export const StoreProvider = ({ children }) => {
//     return <Provider store={store}>{children}</Provider>
// }

export const StoreProvider = ({ children }) => <Provider store={store}>{children}</Provider>


// if its react or next (pageROuter old one) project just import the StoreProvider in layout and warp it
// if its next (app router new One) then you have to make a seperate file and wrap it ex:- UiProvider.js