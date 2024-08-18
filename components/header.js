import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CartIcon from './carticon'
const Header = () => {

    return (
        <header className="text-gray-600 bg-[#663F29] body-font shadow-lg">
            <div className="container mx-auto flex justify-between p-3 flex-col md:flex-row items-center">
                <Link href={'/'} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>

                    <span className="ml-3 text-xl">Ecomm</span>
                </Link>
                <Link href={'/cart'} className="inline-flex items-center border-0 py-1 px-2 focus:outline-none hover:bg-[#E1A17D] rounded text-base mt-4 md:mt-0">
                    <CartIcon />
                </Link>
            </div>
        </header>
    )
}

export default Header