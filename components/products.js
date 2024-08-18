import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Products = ({ products }) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="flex flex-col text-center w-full ">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our New Collection</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Fresh Arrivals: Explore the Latest Trends and Styles in Our New Collection!</p>
            </div>
            <div class="container px-5 py-24 mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        products.map((product) => {
                            const { id, title, price, decription, category, image } = product;
                            return (
                                <Link href={`/product/${id}`} key={id}>
                                    <div class="p-4 hover:shadow-lg rounded-lg cursor-pointer">
                                        <a class="block relative h-48 rounded overflow-hidden">
                                            <Image alt={product.title} class="object-contain  object-center w-full h-full block" src={product.image} height={200} width={300} />
                                        </a>
                                        <div class="mt-4 ">
                                            <h3 class="text-gray-500 flex justify-center text-xs tracking-widest title-font mb-1 uppercase">{product.category}</h3>
                                            <h2 class="text-gray-900 flex justify-center  title-font text-lg font-medium">{product.title}</h2>
                                            <div className='flex justify-center gap-3 mt-1'>
                                                <p className='p-1'>${product.price}</p>
                                                <button className='text-black rounded-lg hover:bg-[#F0B995] p-1'>
                                                    <Link href={`/product/${id}`} className='hover:text-black '>Details</Link>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </section>

    )
}

export default Products