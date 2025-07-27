'use client'

import { StoreProvider } from "./store"

export default function UiProvider({ children }) {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}
