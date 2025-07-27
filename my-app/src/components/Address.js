'use client'

import { onCreateAddress } from "@/redux/actions/shopping-actions"
import { OnViewProfile } from "@/redux/actions/user-actions"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function Address() {

    const [formData, setFormData] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: "",
        country: ""
    })

    const [check, setCheck] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)




    // console.log("check", check);

    useEffect(() => {
        // console.log("working");
        dispatch(OnViewProfile())
    }, [check, user.token])

    console.log("user", user);
    console.log("check", check);
    

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await dispatch(onCreateAddress(formData))
            setCheck(true)
        } catch (error) {
            console.log(error);
        }

    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
       return (
            <div className="bg-white p-4 m-5 lg:w-[800px] w-full rounded">
                <form onSubmit={handleSubmit} className=''>

                    <div className="flex justify-between gap-5">


                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm">Street</label>
                            <input
                                type="text"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                    </div>


                    <div className="flex justify-between gap-5 mt-2">


                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                    </div>

                    <button type="submit" className="bg-[#feb90d] text-black py-2 px-4 rounded-sm
                 hover:bg-[#d09006] cursor-pointer border mt-3 ml-auto flex">
                        Save Address
                    </button>


                </form>
            </div>
        )

    if (Array.isArray(user.address) && user.address.length) {

        return <AddressComponent address={user.address} />
    } else {

        return (
            <div className="bg-white p-4 m-5 lg:w-[800px] w-full rounded">
                <form onSubmit={handleSubmit} className=''>

                    <div className="flex justify-between gap-5">


                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm">Street</label>
                            <input
                                type="text"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                    </div>


                    <div className="flex justify-between gap-5 mt-2">


                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="border rounded text-sm px-2 py-1"
                            />
                        </div>

                    </div>

                    <button type="submit" className="bg-[#feb90d] text-black py-2 px-4 rounded-sm
                 hover:bg-[#d09006] cursor-pointer border mt-3 ml-auto flex">
                        Save Address
                    </button>


                </form>
            </div>
        )

    }
}


// const AddressComponent = function ({ address }) {



//     function addressCard(address) {
//         return (
//             <div className="bg-white m-5 rounded p-5 w-[500px]" key={address.id}>
//                 <p className="bg-[#feb90d] text-black py-2 px-4 rounded-sm w-fit font-bold">You Delivery Address</p>
//                 <div className="mt-2">
//                     <p>Default Address</p>
//                     <p>{address.street}</p>
//                     <p>{address.state}</p>
//                     <p>{address.postalCode}, {address.city}, {address.country}</p>
//                 </div>

//                 <div className="flex gap-3 mt-3 justify-end">
//                     <button className="bg-[#6a87b3] text-white px-3 py-2 rounded">Edit</button>
//                     <button className="bg-[#6a87b3] text-white px-3 py-2 rounded">Delete</button>
//                 </div>

//             </div>
//         )
//     }




//     if (Array.isArray(address)) {

//         return address.map((i) => {

//             return addressCard(i)

//         })

//     } else {
//         return <p>Address Not avilable!</p>
//     }


// }

// import React from 'react'

// export default function Address() {
//   return (
//     <div>Address</div>
//   )
// }
