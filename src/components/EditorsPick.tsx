import React from 'react'
import Image from 'next/image';

const EditorsPick = () => {
    return (
        <section className='bg-[#FAFAFA]  py-20 '>
            <div className='max-w-[1080px] px-4 mx-auto'>


                <div className=" flex flex-col text-center items-center gap-3 py-2">
                    <h3 className='font-bold text-2xl'>EDITOR &apos; S PICK</h3>
                    <p className='text-sm w-48 sm:w-full'>Problems trying to resolve
                        the conflict between </p>

                </div>
                <div className="flex flex-col lg:flex-row text-center justify-center items-center gap-6 mt-6">


                    <div className='relative hover:scale-105 transition-300'>
                        <Image src="/men.png" alt="men-cloths" width={509} height={500} className='h-[500px] w-[324px] lg:w-[510px] object-cover' />
                        <button className='w-[170px] h-[48px] bg-white absolute bottom-8 left-8 font-bold hover:scale-105 transition-300'>MEN</button>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-6  '>
                        <div className='relative hover:scale-105 transition-300'>
                            <Image width={509} height={500} src="/women.png" alt="women-cloths" className='h-[500px] w-[324px] lg:w-[240px] object-cover' />
                            <button className='w-[170px] h-[48px] bg-white absolute bottom-3 left-12 font-bold hover:scale-105 transition-300'>WOMEN</button>
                        </div>
                        <div className='flex flex-col h-[500px]  justify-between'>
                            <div className='relative hover:scale-105 transition-300'>
                                <Image width={509} height={500} src="/accessories.png" alt="accessories" className='h-[242px] w-[324px] lg:w-[240px] object-cover' />
                                <button className='w-[170px] h-[30px] sm:h-[38px] bg-white absolute bottom-8 left-8 font-bold hover:scale-105 transition-300'>accessories</button>
                            </div>
                            <div className='relative hover:scale-105 transition-300'>
                                <Image width={509} height={500} src="/kids.png" alt="kids" className='h-[242px]  w-[324px] lg:w-[240px] object-cover' />
                                <button className='w-[120px] h-[30px] sm:h-[38px] bg-white absolute bottom-3 left-12 font-bold hover:scale-105 transition-300'>kids</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default EditorsPick
