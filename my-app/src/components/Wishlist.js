"use client"

import { onRemoveFromWishList } from '@/redux/actions/shopping-actions'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Wishlist() {

  const dispatch = useDispatch()
  const { wishlist, cart } = useSelector((state) => state.user)

  console.log({ wishlist });


  async function removeFromWishlist(id) {
    try {
      const res = dispatch(onRemoveFromWishList(id))
      console.log(res);

    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div className='space-y-5'>
      {wishlist.length > 0 ? (
        wishlist.map((item) => (
          <div className='border p-5 flex justify-between items-center' key={item.id}>
            <div className='flex gap-4'>
              <Image
                src={item.banner || "/assets/images/placeholder.jpg"}
                alt={item.name || "Product"}
                className="object-cover w-[150px] h-[100px] rounded"
                width={200}
                height={200}
              />

              <div className='flex flex-col justify-between'>
                <div>
                  <p className='font-semibold'>{item.name}</p>
                  <p className='text-sm text-gray-500'>{item.desc}</p>
                </div>
                <p className='text-[15px]'>${item.price}</p>
              </div>
            </div>

            <div
              className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer flex items-center gap-2'
              onClick={() => removeFromWishlist(item.id)}
            >
              <FontAwesomeIcon icon={faTrash} className='w-5' />
              <p>Remove</p>
            </div>
          </div>
        ))
      ) : (
        <p>No wishlist items</p>
      )}
    </div>
  )
}
