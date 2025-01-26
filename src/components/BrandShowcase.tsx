import React from 'react'
import Image from 'next/image';

const BrandShowcase = () => {
  return (
    <div className='bg-[#FAFAFA] '>
    <div className='flex flex-col md:flex-row  gap-20 justify-center py-16 max-w-[1080px] mx-auto px-4 items-center'>
      <Image src='/hooli.png' alt='Aws logo' width={102.99} height={33.81} />
      <Image src='/lyft.png' alt='Aws logo' width={83} height={58.96} />
      <Image src='/leaf.png' alt='Aws logo' width={102} height={74.84} />
      <Image src='/stripe.png' alt='Aws logo' width={102.98} height={41.98} />
      <Image src='/aws.png' alt='Aws logo' width={103.68} height={61.75} />
      <Image src='/redit.png' alt='Aws logo' width={75.75} height={71.86} />
    </div>
  </div>
  )
}

export default BrandShowcase
