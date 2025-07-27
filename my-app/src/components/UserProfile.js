"use client"

import { GetData } from "@/backend/clinet"
import { API_VERSION, BASE_URL, ENDPOINT } from "@/backend/endpoints"
import { checkProductList } from "@/redux/slices/userSlice"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function UserProfile() {

  const dispatch = useDispatch()
  const [emailData, setEmailData] = useState([])
  const [productData, setProductData] = useState({})

  const { productlist } = useSelector((state) => state.user)

  async function fillProductData() {
    try {
      const response = await axios.post(`${BASE_URL}/api/${API_VERSION}${ENDPOINT.PRODUCTS}/bulkproducts`)
      console.log(response.data);
      if (response.status == 201) {
        dispatch(checkProductList(true))
      }

    } catch (error) {
      console.log(error);

    }
  }

  async function fetchEmail() {
    try {
      let res = await GetData(`/api/${API_VERSION}${ENDPOINT.CUSTOMER}/email`, true)
      console.log(res.data);
      setEmailData(res.data)

    } catch (error) {
      console.log(error);

    }
  }

  async function fetchPrductData() {
    try {
      let res = await GetData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/redisexamin`, false)
      // console.log(res.data);
      setProductData(res?.data)

    } catch (error) {
      console.log(error);

    }
  }

  console.log(productData);

  return (
    <div>
      {
        productlist ? (
          <p>Product Data store in DB successfully</p>
        ) : (
          <button onClick={fillProductData} className="bg-amber-500 border p-3 rounded">Fill Products</button>

        )
      }

      <div className="my-3 ">
        <p className="underline">Data from Email Table for checking RabbitMq</p>
        <button onClick={fetchEmail} className="bg-amber-500 border p-3 rounded py-2">Get All Mail</button>
        <div className="text-sm">
          {
            emailData.map((i, index) => (
              <div key={`email-${index}`}>
                <p>created_at: {" "}{i.created_at}</p>
                <p>id: {" "}{i.id}</p>
                <p>message: {" "}{i.message}</p>
                <p>phone: {" "}{i.phone}</p>
                <p>subject: {" "}{i.subject}</p>
                <p>to_email: {" "}{i.to_email}</p>
              </div>
            ))
          }
        </div>
      </div>


      <div className="my-3 ">
        <p className="underline">Check Redis key invalid after 60 Sec</p>
        <button onClick={fetchPrductData}  className="bg-blue-500 border p-2 mt-3 rounded text-white cursor-pointer">Get All Product</button>
        <div className="text-sm">
          <p>
            Source: <span className={productData?.fromCache ? 'text-green-600' : 'text-blue-600'}>
              {productData?.fromCache ? 'Redis Cache' : 'Database'}
            </span>
          </p>
          <p>responseTime: {(productData?.responseTime / 1000).toFixed(2)} sec</p>
          {/* <p>
            Source: <span className={productData?.source === 'cache' ? 'text-green-600' : 'text-blue-600'}>
              {productData?.source}
            </span>
          </p> */}
          <div className="flex gap-1">
            {
              productData?.data?.map((i, index) => (
                <div key={`redis-key-p-${index}`}>
                  <Image
                    src={i?.banner}
                    alt={i.name}
                    className="object-cover w-[80px] h-[80px] rounded"
                    width={100}
                    height={100}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}
