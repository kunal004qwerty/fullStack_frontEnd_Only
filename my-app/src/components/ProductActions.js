"use client"

import { onAddToCart, onAddToWishList, onRemoveFromCart, onRemoveFromWishList } from "@/redux/actions/shopping-actions";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductActions({ product }) {
    // console.log(data);

    console.log({product});
    console.log(product.id);
    



    const dispatch = useDispatch()
    // const { currentProduct } = useSelector((state) => state.shopping)
    const { wishlist, cart } = useSelector((state) => state.user)

    const [currentUnit, setCurrentUnit] = useState(0)

    const existsInWishList = Array.isArray(wishlist) && wishlist.some(item => item.id == product?.id)
    const existsInCart = Array.isArray(cart) && cart.some(item => item.id == product?.id)
    // const existsInCart = Array.isArray(cart) && cart.filter(item => item.id == product?.id)
    // let existsInCart = true

    console.log({ wishlist, cart, existsInWishList, existsInCart });

    async function addToWishlist() {
        // Dispatch add/remove logic here
        console.log(existsInWishList ? "Removing..." : "Adding...")
        if (existsInWishList) dispatch(onRemoveFromWishList(product.id))
        else dispatch(onAddToWishList(product?.id))

    }


    function addToCart() {
        const newUnit = currentUnit + 1
        setCurrentUnit(newUnit)
        console.log("Add TO cart DIspatch");
        dispatch(onAddToCart({ id: product?.id, qty: newUnit }))

    }

    function removeCart() {
        if (currentUnit > 0) {
            const newUnit = currentUnit - 1
            setCurrentUnit(newUnit)
            if (newUnit > 0) {
                console.log("Add TO Cart dispatch");
                dispatch(onAddToCart({ id: product?.id, qty: newUnit }))


            } else {
                console.log("REmove from cart dispatch");
                dispatch(onRemoveFromCart(product?.id))

            }
        }
    }

    // console.log({ currentUnit });


    return (

        <div className='flex gap-3 items-center justify-around'>


            <div className='flex gap-5 items-center text-xl'>
                {
                    existsInCart ? (
                        <>
                            <div className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border' onClick={addToCart}>+</div>
                            <div>{currentUnit}</div>
                            <div className='bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border' onClick={removeCart}>-</div>
                        </>
                    )
                        : (<div onClick={() => {
                            setCurrentUnit(1)
                            dispatch(onAddToCart({ id: product.id, qty: 1 }))
                        }}
                            className="bg-[#feb90d] text-black py-2 px-4 rounded-sm hover:bg-[#d09006] cursor-pointer border"
                        >Cart</div>)
                }



            </div>

            {/* <div>
                {checkWishListExistence()}
            </div> */}

            <div
                className={`${existsInWishList ? "bg-[#9d9d9d]" : "bg-[#f6537f]"} text-white py-2 px-4 rounded-sm cursor-pointer border flex gap-1 items-center`}
                onClick={addToWishlist}
            >
                <p>{existsInWishList ? "Remove" : "WishList"}</p>
                <FontAwesomeIcon icon={faHeart} className='w-5' />
            </div>
        </div>

        // <div>productAction</div>

    )
}
