import React from 'react'
import BrandShowcase from '../../../components/BrandShowcase';
import { getCategories, getProducts } from '@/lib/queries';
import ProductGrid from '@/components/products/ProductGrid';
import CategoryList from '@/components/CategoryList';


const Shop = async () => {
  const allProducts = await getProducts()
  const categories = await getCategories()

  return (
    <>
      <CategoryList categories={categories} />

      {/* productGrid */}
      <div className='max-w-[1080px] px-4 mx-auto'>

        <ProductGrid products={allProducts} />

      </div>
      {/* pagination */}
      <div className='w-[313px]  text-[#23A6F0] flex justify-center items-center   mx-auto my-8 rounded-md border-y-2'>
        <button className='text-[#BDBDBD]  font-bold h-[74px] w-[84px]  border-x '>First</button>
        <button className=' font-bold h-[74px] w-[50px]  border-x'>1</button>
        <button className='text-white bg-[#23A6F0] h-[74px] w-[50px]  border-x'>2</button>
        <button className=' font-bold h-[74px] w-[50px]  border-x'>3</button>
        <button className=' font-bold h-[74px] w-[84px]  border-x'>Next</button>

      </div>
      <BrandShowcase />
    </>

  )
}

export default Shop


