'use client'

import { faCartShopping, faGift, faHeart, faRectangleList, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Orders from './Orders'
// import { POST } from '@/backend/client'
import UserProfile from './UserProfile'
import PlaceOrder from './PlaceOrder'
import { useSelector } from 'react-redux'


export default function ShoppingCart() {

    const [activeTab, setActiveTab] = useState('cart')
    const { cart } = useSelector(state => state.user)


    const tabs = [
        { key: 'cart', icon: faCartShopping, label: 'Cart' },
        { key: 'wishlist', icon: faHeart, label: 'Wishlist' },
        { key: 'orders', icon: faRectangleList, label: 'Order' },
        { key: 'user', icon: faUser, label: 'User Profile' },
    ]



    return (
        <div className=' bg-white p-5 m-5 rounded-lg'>
            <div className='font-semibold text-2xl text-[#6a87b3]'>Shopping Cart</div>

            <div className='font-lg flex  text-[#6a87b3] mt-5 border-b-2'>

                {/* <div className='flex gap-2 border py-2 px-5 rounded'>
                    <FontAwesomeIcon icon={faCartShopping} className='w-5' />
                    <p>Cart</p>
                </div>
                <div className='flex gap-2 border py-2 px-5 rounded'>
                    <FontAwesomeIcon icon={faHeart} className='w-5' />
                    <p>Wishlist</p>
                </div>
                <div className='flex gap-2 border py-2 px-5 rounded'>
                    <FontAwesomeIcon icon={faRectangleList} className='w-5' />
                    <p>Orders</p>
                </div> */}


                {
                    tabs.map((tab) => (

                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex gap-2  py-2 px-6 rounded-t transition  items-center
                            ${activeTab === tab.key ? 'bg-[#6a87b3] text-white' : ''}`}
                        >
                            <FontAwesomeIcon icon={tab.icon} className='w-5' />
                            <p>{tab.label}</p>
                        </button>
                    ))
                }


            </div>

            <div className='mt-6'>
                {activeTab === 'cart' && <div><Cart /></div>}
                {activeTab === 'wishlist' && <div><Wishlist /></div>}
                {activeTab === 'orders' && <div><Orders /></div>}
                {activeTab === 'user' && <div><UserProfile /></div>}
            </div>


            {(Array.isArray(cart) && cart.length > 0) && <PlaceOrder />}
        </div>
    )
}
