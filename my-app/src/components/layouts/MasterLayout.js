"use client"

import UiProvider from "@/redux/UiProvider";
import NavBar from "../NavBar";

export default function MasterLayout({ children }) {
    return (
        <UiProvider>
            <div className='text-black bg-[#b8bbb9] min-h-screen '>
                <NavBar />
                {children}
            </div>
        </UiProvider>
    )
}
