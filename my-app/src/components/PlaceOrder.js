"use client"

import { onPlaceOrder } from '@/redux/actions/shopping-actions'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PlaceOrder() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.user)

  const totalAmount = Array.isArray(cart)
    // ? cart.reduce((acc, { unit, product }) => acc + unit * product?.price, 0)
    ? cart.reduce((acc, i) => acc + i.Cart.unit * i.price, 0)
    : 0

  function handleClick() {
    // Dispatch place order logic here
    console.log("Placing order...")
    dispatch(onPlaceOrder({ txnId: "72365ffdds" }))
  }

  return (
    <div className='flex items-center gap-5 mt-5'>
      <p>Total Amount: ₹{totalAmount}</p>
      <div
        className='flex gap-2 items-center border py-2 px-5 rounded bg-[#ff0033] text-white hover:bg-[#5f1319d3] cursor-pointer'
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faGift} className='w-5' />
        <p>Place Order</p>
      </div>
    </div>
  )
}
