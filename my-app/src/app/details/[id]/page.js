


// import { GetData } from '@/backend/clinet';
// import { API_VERSION, ENDPOINT } from '@/backend/endpoints';
// import ProductActions from '@/components/ProductActions';
// import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Image from 'next/image'

// export default async function ProductPage({ params }) {
//     const response = await GetData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/${params.id}`)
//     let productData = await response?.data?.data?.product



//     if (!productData) {
//         return <p className="p-5">Loading...</p>
//     }



//     return (
//         <div className='p-6 m-5 bg-white flex gap-8'>
//             <div>
//                 <Image
//                     src={productData.banner}
//                     alt={productData.name}
//                     className="object-cover w-[500px] h-[300px]"
//                     width={200}
//                     height={200}
//                 />
//             </div>

//             <div className='flex flex-col justify-between w-[900px]'>
//                 <div className='text-xl font-semibold'>Category / {productData.type}</div>
//                 <p className='text-lg'>Price <span className='font-semibold'>${productData.price}</span></p>
//                 <p className='text-lg'>{productData.desc}</p>
//                 <p className='text-[15px]'>Type of Product: <span>{productData.type}</span></p>
//                 <p className='text-sm text-[#9b9b9b]'>* Product will be available through standard delivery channel</p>

//                 <ProductActions product={productData} />

//             </div>
//         </div>

//         // <p>Product Details</p>
//     )
// }


"use client"

import { GetData } from "@/backend/clinet"
import { API_VERSION, ENDPOINT } from "@/backend/endpoints"
import ProductActions from "@/components/ProductActions"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductPage() {
    const [productData, setProductData] = useState({})
    const params = useParams()
    const id = params?.id

    useEffect(() => {
        if (!id) return; // wait until id is available

        async function productDetail() {
            let res = await GetData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/${id}`)
            if (res.status === 200) {
                setProductData(res.data.data.product)
            }
        }

        productDetail()
    }, [id]) // <-- Important to watch `id`

    if (!productData?.banner) {
        return <p className="p-5">Loading...</p>
    }

    return (
        <div className='p-6 m-5 bg-white flex gap-8'>
            <div>
                <Image
                    src={productData.banner}
                    alt={productData.name}
                    className="object-cover w-[500px] h-[300px]"
                    width={500}
                    height={300}
                />
            </div>

            <div className='flex flex-col justify-between w-[900px]'>
                <div className='text-xl font-semibold'>Category / {productData.type}</div>
                <p className='text-lg'>Price <span className='font-semibold'>${productData.price}</span></p>
                <p className='text-lg'>{productData.desc}</p>
                <p className='text-[15px]'>Type of Product: <span>{productData.type}</span></p>
                <p className='text-sm text-[#9b9b9b]'>* Product will be available through standard delivery channel</p>

                <ProductActions product={productData} />
            </div>
        </div>
    )
}
