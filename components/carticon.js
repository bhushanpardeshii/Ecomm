'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CartIcon = () => {
    const [cartCount, setCartCount] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const carts = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(carts.reduce((acc, item) => acc + item.quantity, 0));
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <div className="relative">
            <Link href="/cart">
                <Image src="/cart.svg" alt="Cart" width={32} height={32} />
            </Link>
            {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
                    {cartCount}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
