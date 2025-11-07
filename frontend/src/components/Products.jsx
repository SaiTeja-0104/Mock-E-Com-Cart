import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { ContextApi } from '../context/ContextApi.jsx';

const Products = () => {
  const {products} = useContext(ContextApi)


  return (
    <div id="shop-section" className='font-pop w-[80%] mx-auto py-12'>
      <div className='text-3xl pb-10 font-semibold text-gray-700'><span className='text-gray-300'>ALL</span> PRODUCTS</div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id}  product={product}  />
        ))}
      </div>
    </div>
  )
}

export default Products
