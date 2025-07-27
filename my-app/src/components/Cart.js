"use client"

import { onAddToCart, onRemoveFromCart } from '@/redux/actions/shopping-actions'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {


  const { wishlist, cart } = useSelector((state) => state.user)


  console.log({ cart });
  const dispatch = useDispatch()

  function addTocart(id, unit) {
    console.log("Add To cart Dispatch", { id, unit });

    dispatch(onAddToCart({ id: id, qty: unit }))

  }

  function removeCart(id, unit) {
    console.log("Add To cart Dispatch", { id, unit });
    if (unit > 1) dispatch(onAddToCart({ id: id, qty: unit - 1 }))
    else dispatch(onRemoveFromCart(id))
  }



  return (
    <div className='space-y-5'>

      {
        Array.isArray(cart) && cart.length > 0 ? (

          cart.map((item, index) => {

            console.log(item);


            return (
              <div className='border p-5 flex justify-between' key={`cart-${index}`}>

                <div className='flex gap-4'>
                  <Image
                    src={item?.banner ? item?.banner : "/assets/images/Alphonso_Mango.jpg"}
                    alt={item?.name ? item?.name : "product-images"}
                    className="object-cover w-[150px] h-[100px] rounded"
                    width={200}
                    height={200}
                  />

                  <div className='flex flex-col justify-between'>
                    <div>
                      <p className='font-semibold'>{item?.name}</p>
                      <p className='text-sm text-gray-500'>{item?.desc}</p>
                    </div>

                    <p className='text-[15px]'>$ {item?.price}</p>
                  </div>
                </div>


                <div className='flex gap-5 items-center text-xl'>
                  <div className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border'
                    onClick={() => addTocart(item?.id, item?.Cart?.unit + 1)}
                  >+</div>
                  <div>{item?.Cart?.unit}</div>
                  <div className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border'
                    onClick={() => removeCart(item?.id, item?.Cart?.unit)}
                  >-</div>
                </div>

              </div>
            )
          }))



          // cart.map((item, index) => (

          //   <div className='border p-5 flex justify-between' key={`cart-${index}`}>

          //     <div className='flex gap-4'>
          //       <Image
          //         src={item?.product?.banner ? item?.product?.banner : "/assets/images/Alphonso_Mango.jpg"}
          //         alt={item?.product?.name}
          //         className="object-cover w-[150px] h-[100px] rounded"
          //         width={200}
          //         height={200}
          //       />

          //       <div className='flex flex-col justify-between'>
          //         <div>
          //           <p className='font-semibold'>{item?.product?.name}</p>
          //           <p className='text-sm text-gray-500'>{item?.product?.desc}</p>
          //         </div>

          //         <p className='text-[15px]'>$ {item?.product?.price}</p>
          //       </div>
          //     </div>


          //     <div className='flex gap-5 items-center text-xl'>
          //       <div className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border'>+</div>
          //       <div>{item?.unit}</div>
          //       <div className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border'>-</div>
          //     </div>

          //   </div>
          // ))



          :
          (
            <p>No Cart Items</p>
          )
      }

      {/* <div className='border p-5 flex justify-between'>

        <div className='flex gap-4'>
          <Image
            src="/assets/images/Alphonso_Mango.jpg"
            alt="Alphonso Mango"
            className="object-cover w-[150px] h-[100px] rounded"
            width={200}
            height={200}
          />

          <div className='flex flex-col justify-between'>
            <div>
              <p className='font-semibold'>Langra Mango</p>
              <p className='text-sm text-gray-500'>Great Quantity of Mango</p>
            </div>

            <p className='text-[15px]'>$280</p>
          </div>
        </div>


        <div className='flex gap-5 items-center text-xl'>
          <div className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border'>+</div>
          <div>1</div>
          <div className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border'>-</div>
        </div>

      </div> */}
    </div >
  )
}
