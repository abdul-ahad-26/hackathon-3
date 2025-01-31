import React from 'react'
import ProductGrid from '../../components/ProductGrid'
import Image from 'next/image'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import Breadcrum from '../../components/Breadcrum';
import BrandShowcase from '../../components/BrandShowcase';
import { client } from '@/sanity/lib/client';
import { Product } from '@/types/product';




const getProducts = async () => {
  const products = await client.fetch<Product[]>(
    `
          *[_type=="product"]{
        _id,
            title,
          description,
          "image_url":image.asset->url,
          price,
          category,
          quantity,
          "discountPercentage":discountPercent,
          isNew,
          colors,
          sizes,
          slug
      }
          `
  )
  return products

}


const Shop = async () => {
  const products = await getProducts()
  console.log("products: ", products)

  return (
    <>
     <Breadcrum/>

      {/* categories catalog */}
      <div className='bg-[#FAFAFA]'>
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pb-8 place-items-center">
          {/* Grid Item 1 */}
          <div
            className="w-[206px] h-[223px] flex justify-center items-center hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: "url('/shop1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="flex flex-col gap-2 text-white font-bold text-center">
              <p>CLOTHES</p>
              <p>5 items</p>
            </span>
          </div>

          {/* Grid Item 2 */}
          <div
            className="w-[206px] h-[223px] flex justify-center items-center hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: "url('/shop2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="flex flex-col gap-2 text-white font-bold text-center">
              <p>CLOTHES</p>
              <p>5 items</p>
            </span>
          </div>

          {/* Grid Item 3 */}
          <div
            className="w-[206px] h-[223px] flex justify-center items-center hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: "url('/shop3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="flex flex-col gap-2 text-white font-bold text-center">
              <p>CLOTHES</p>
              <p>5 items</p>
            </span>
          </div>

          {/* Grid Item 4 */}
          <div
            className="w-[206px] h-[223px] flex justify-center items-center hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: "url('/shop4.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="flex flex-col gap-2 text-white font-bold text-center">
              <p>CLOTHES</p>
              <p>5 items</p>
            </span>
          </div>

          {/* Grid Item 5 */}
          <div
            className="w-[206px] h-[223px] flex justify-center items-center hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: "url('/shop5.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="flex flex-col gap-2 text-white font-bold text-center">
              <p>CLOTHES</p>
              <p>5 items</p>
            </span>
          </div>
        </div>

      </div>

      {/* Filter bar */}
      <div className="flex flex-col md:flex-row gap-8 justify-between max-w-[1080px]  mx-auto px-4 py-6 items-center">
        <p className='text-[#737373] font-bold text-sm '>Showing all 12 results</p>
        <div className='flex gap-2 items-center'>
          <p className='text-[#737373] font-bold text-sm '>Views:</p>
          <div className='w-[46px] h-[46px] flex justify-center items-center shadow rounded'><Image src='/filter.png' alt='filter' width={14} height={14} /></div>
          <div className='w-[46px] h-[46px] flex justify-center items-center shadow rounded'><Image src='/filter1.png' alt='filter' width={14} height={14} /></div>
        </div>
        <div className='flex gap-4'>
          <button className='text-[#737373] bg-[#DDDDDD] border rounded w-[141px] h-[50px]'>Popularity <KeyboardArrowDownSharpIcon /></button>
          <button className='bg-[#23A6F0] w-[94px] h-[50px] font-bold text-sm border rounded text-white'>Filter</button>
        </div>
      </div>

      {/* productGrid */}
      <div className='max-w-[1080px] px-4 mx-auto'>

        <ProductGrid products={products} />

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
