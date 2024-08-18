import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="bg-[#f07c3ea7] text-gray-600 mb-6 body-font">
            <div className=" container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center rounded" alt="hero" src="/model1.jpg" height={700} width={400} />
                </div>
                <div classNameName="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Elevate Your Style

                    </h1>
                    <p className="mb-8 leading-relaxed">Discover the latest trends with our curated fashion collection. From timeless classics to contemporary must-haves, elevate your style effortlessly. Shop now and make every outfit a statement of elegance and individuality.</p>
                    <div className="flex justify-start">
                        <Link href={'/cart'}>
                            <button className="inline-flex text-white bg-[#965532] border-0 py-2 px-6 focus:outline-none hover:bg-[#663F29] rounded text-lg">Go to Cart</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero