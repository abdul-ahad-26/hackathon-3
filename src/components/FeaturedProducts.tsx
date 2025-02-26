import React from 'react'
import ProductGrid from './products/ProductGrid'
import { Product } from '@/types/product';

const FeaturedProducts = ({products}:{products:Product[]}) => {
  

  return (
    <section className='max-w-[1080px] px-4 mx-auto flex flex-col  items-center gap-16 py-16'>
        <div className='flex flex-col text-center items-center gap-3 py-2 px-8 text-[#737373]'>
            <h3 className='text-xl'>Featured Products</h3>
            <h3 className='font-bold text-2xl text-[#252B42]'>BESTSELLER PRODUCTS</h3>
            <p className='text-sm '>Problems trying to resolve the conflict between </p>

        </div>
        <ProductGrid products={products} />
    </section>
  )
}

export default FeaturedProducts