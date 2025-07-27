"use client"

import Image from "next/image";
import { useSelector } from "react-redux"

export default function Orders() {

  const { orders } = useSelector((state) => state.user)
  console.log({ orders });


  return (
    <div>
      {orders.length ? (

        orders.map((i, index) => (

          <div key={`order-${index}`} className="border p-5 rounded ">
            <div className="flex justify-between">
              <p>Order ID: {i.txnId} </p>
              <p>Total Amount: $ {i.amount}</p>
            </div>

            <div className="py-1">
              <p>Products:</p>
              {i.products.map((product, index) => (
                <div key={`customer-roduct-${index}`} className="flex justify-between">
                  <Image
                    src={product?.banner}
                    alt={product.name}
                    className="object-cover w-[80px] h-[80px] rounded"
                    width={100}
                    height={100}
                  />
                  <p>{product.OrderItem.unit}  x {" "} {product.name}</p>
                </div>
              ))}
            </div>

            <p>Order Placed At: {i.updatedAt}</p>

          </div>
        ))

      ) : (
        <p>No Orders yet</p>
      )}
    </div>
  )
}
