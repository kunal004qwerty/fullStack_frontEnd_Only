'use client'

import { onGetProducts } from "@/redux/actions/shopping-actions";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {

  const dispatch = useDispatch()
  const { products:productData } = useSelector((state) => state.shopping)

  useEffect(() => {
    dispatch(onGetProducts())
  }, [])

  console.log("data", productData);

  return (

    <div className="w-full mx-auto border p-5 min-h-screen flex flex-wrap gap-9 items-center justify-center">

      {
        productData ? (
          productData.map((item, id) => (
            <Link href={`/details/${item?.id}`} key={`product-${id}`}>

              <div className="bg-white w-[250px] p-2 min-h-[250px] flex flex-col gap-y-1 rounded shadow">
                <Image
                  src={item?.banner}
                  alt={item?.name}
                  className="object-cover w-full h-[172px] rounded"
                  width={200}
                  height={200}
                />
                <p className="text-xl">{item?.name}</p>
                <p className="text-sm leading-4 text-[#3ea6ff]">{item?.desc}</p>
                <p className="text-lg">Price:  $ {item?.price}</p>
              </div>
            </Link>
          ))
        ) :
          (
            <p>No Product Avilable</p>
          )
      }


      <Link href={`/details/12`}>

        <div className="bg-white w-[250px] p-2 min-h-[250px] flex flex-col gap-y-1 rounded shadow">
          <Image
            src="/assets/images/Alphonso_Mango.jpg"
            alt="Alphonso Mango"
            className="object-cover w-full h-[172px] rounded"
            width={200}
            height={200}
          />
          <p className="text-xl">Alphonso Mango</p>
          <p className="text-sm leading-4 text-[#3ea6ff]">Great Quality of Mango afwffwwa adwd</p>
          <p className="text-lg">Price:  $ 200</p>
        </div>
      </Link>


    </div>
  );
}


// ------------------------------------------------------- SSR



// import { GetData } from "@/backend/clinet";
// import { API_VERSION, ENDPOINT } from "@/backend/endpoints";
// import Image from "next/image";
// import Link from "next/link";


// export default async function Home() {

//     const response = await GetData(`/api/${API_VERSION}${ENDPOINT.PRODUCTS}/`)
//     let productData = response.data

//   return (

//     <div className="w-full mx-auto border p-5 min-h-screen flex flex-wrap gap-9 items-center justify-center">

//       {
//         productData ? (
//           productData.map((item, id) => (
//             <Link href={`/details/${item?.id}`} key={`product-${id}`}>

//               <div className="bg-white w-[250px] p-2 min-h-[250px] flex flex-col gap-y-1 rounded shadow">
//                 <Image
//                   src={item?.banner}
//                   alt={item?.name}
//                   className="object-cover w-full h-[172px] rounded"
//                   width={200}
//                   height={200}
//                 />
//                 <p className="text-xl">{item?.name}</p>
//                 <p className="text-sm leading-4 text-[#3ea6ff]">{item?.desc}</p>
//                 <p className="text-lg">Price:  $ {item?.price}</p>
//               </div>
//             </Link>
//           ))
//         ) :
//           (
//             <p>No Product Avilable</p>
//           )
//       }


//       {/* <Link href={`/details/12`}> */}

//         <div className="bg-white w-[250px] p-2 min-h-[250px] flex flex-col gap-y-1 rounded shadow">
//           <Image
//             src="/assets/images/Alphonso_Mango.jpg"
//             alt="Alphonso Mango"
//             className="object-cover w-full h-[172px] rounded"
//             width={200}
//             height={200}
//           />
//           <p className="text-xl">Alphonso Mango</p>
//           <p className="text-sm leading-4 text-[#3ea6ff]">Great Quality of Mango afwffwwa adwd</p>
//           <p className="text-lg">Price:  $ 200</p>
//         </div>
//       {/* </Link> */}


//     </div>
//   );
// }
