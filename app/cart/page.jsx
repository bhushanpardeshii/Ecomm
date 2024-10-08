'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [carts, setCarts] = useState([]);
    const [total, setTotal] = useState(0);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const discountedTotal = total - (total * discount / 100);
    // Load cart items from localStorage when the component mounts in useEffect to avoid rerender
    useEffect(() => {
        const savedCarts = JSON.parse(localStorage.getItem('cart')) || [];
        setCarts(savedCarts);
    }, []);

    // Recalculate total when carts change
    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
        setTotal(total);
    }, [carts]);

    if (carts.length === 0) {
        return <div>Cart is Empty</div>;
    }

    const handleInc = (id) => {
        const updatedCart = carts.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });

        setCarts(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const handleDec = (id) => {
        const updatedCart = carts.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });

        setCarts(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const removeProduct = (id) => {
        const updatedCart = carts.filter(item => item.id !== id);
        setCarts(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    const handleApplyCoupon = () => {
        if (coupon === 'DISCOUNT10') {  // Example coupon code
            setDiscount(10);  // 10% discount
        } else {
            alert('Invalid coupon code');
            setDiscount(0);
        }
    }
    const availableCoupons = [
        { code: 'DISCOUNT10', description: 'Get 10% off your order' },

    ];

    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col lg:flex-row shadow-md my-10">
                <div className="w-full lg:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{carts?.length}</h2>
                    </div>
                    <div className="flex mt-10 mb-5 ">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>
                    {
                        carts?.map(cart => (
                            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 md:flex-row" key={cart?.id}>
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img className="h-24" src={cart?.image} alt={cart?.title} />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{cart?.title}</span>
                                        <span className="text-red-500 text-xs uppercase">{cart?.category}</span>
                                        <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => removeProduct(cart?.id)}>Remove</a>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleDec(cart?.id)}>
                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                    <input className="mx-2 border text-center w-8" type="text" value={cart?.quantity} readOnly />
                                    <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleInc(cart?.id)}>
                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">{cart?.price}</span>
                                <span className="text-center w-1/5 font-semibold text-sm">{cart?.price * cart?.quantity}</span>
                            </div>
                        ))
                    }
                    <Link href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </Link>
                </div>

                <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {carts?.length}</span>
                        <span className="font-semibold text-sm">{discountedTotal.toFixed(2)}</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input
                            type="text"
                            id="promo"
                            placeholder="Enter your code"
                            className="p-2 text-sm w-full"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                        onClick={handleApplyCoupon}
                    >
                        Apply
                    </button>

                    {/* Display available coupon codes */}
                    <div className="mt-4">
                        <h2 className="font-semibold text-sm uppercase mb-2">Available Coupons</h2>
                        <ul>
                            {availableCoupons.map((coupon) => (
                                <li key={coupon.code} className="text-sm text-gray-700">
                                    <strong>{coupon.code}</strong> - {coupon.description}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>${(discountedTotal + 10).toFixed(2)}</span>
                        </div>
                        <button className="bg-[#965532] font-semibold hover:bg-[#663F29] py-3 text-sm text-white uppercase w-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart