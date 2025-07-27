import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <div className='bg-[#57a143] flex justify-between items-center w-full py-5 px-5'>
            <Link href={'/'}>
                <p className='font-bold text-2xl text-white'>Online Shopping</p>
            </Link>

            <div className=' flex gap-x-5 '>

                <Link href={'/shopping'}>
                    <div className='bg-[#87c17a] text-white py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-[#003b95] cursor-pointer flex gap-x-1'>
                        <FontAwesomeIcon icon={faCartShopping} className='h-6'></FontAwesomeIcon>
                    </div>
                </Link>
                <Link href={'/login'}>
                    <div className='bg-white text-[#003b95] py-2 px-4 rounded-sm hover:bg-gray-200 cursor-pointer flex gap-x-1'>
                        <FontAwesomeIcon icon={faUserPlus} className='h-6'></FontAwesomeIcon>
                    </div>
                </Link>

            </div>
        </div>
    )
}
 