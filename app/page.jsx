'use client'
import Hero from "@/components/hero";
import Products from "@/components/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=8')
      const data = await response.json()
      setproducts(data)
      console.log(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Hero />
      {
        products.length > 0 ? <Products products={products} /> :
          <div>Loading..</div>
      }

    </>
  );
}
