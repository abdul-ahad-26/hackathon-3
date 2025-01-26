import React from 'react'
import Image from 'next/image'

const ClassicProduct = () => {
  return (
    <section className='bg-[#23856D] '>
        <div className='max-w-[1080px] px-4 mx-auto flex flex-col  md:flex-row  pt-16 justify-between items-center md:items-end'>
        <div className=' flex flex-col  py-28 gap-10  text-white  md:text-start max-w-[350px] text-center'>
            <h4 className='text-xl'>SUMMER 2020</h4>
            <h1 className='font-bold text-[58px]'>Vita Classic Product</h1>
            <p className='text-sm'>We know how large objects will act, We know how are objects will act, We know</p>
            <div className='flex gap-8 items-center flex-col md:flex-row'>
                <div className='font-bold text-xl'>$16.48</div>
                <button className='bg-[#2DC071] text-sm font-bold px-8 py-4 rounded'>ADD TO CART</button>
            </div>
        </div>
        <Image src="/classic-product1.png" alt='classic product' height={685} width={443} className='md:max-lg:w-[300px] md:max-lg:self-center'/>

        </div>
        

    </section>
  )
}

export default ClassicProduct