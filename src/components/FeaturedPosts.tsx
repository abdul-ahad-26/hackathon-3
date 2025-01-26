import React from 'react'
import Image from 'next/image'
import { BiAlarm } from "react-icons/bi";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";


const FeaturedPosts = () => {
  return (
    <section className='max-w-[1080px] py-20 px-4 mx-auto flex flex-col   justify-center items-center gap-10'>
      {/* heading part?= */}
      <div className=" flex flex-col text-center  md:w-1/2 items-center gap-3 py-2">
        <h6 className='font-bold text-sm text-[#23A6F0]'>Practice Advice</h6>
        <h2 className='font-bold text-[40px] text-[#252B42]'>Featured Posts</h2>
        <p className='text-sm  text-[#737373]'>Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics </p>

      </div>
      {/* cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {/* card 1 */}
        <div className='bg-white shadow-lg  '>

          <div className='relative'>
            <Image src="/featured-posts1.png" alt="Post 1" width={300} height={348} className='w-full h-auto object-cover' />
            <span className='bg-[#E74040] text-white font-bold text-sm absolute top-4 left-4 px-4 py-1 rounded'>NEW</span>
          </div>

          <div className='p-4 '>
            <div className='space-x-4 text-[#737373] text-xs mb-1'>
              <span className='text-[#8EC2F2]'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h4 className='text-xl text-[#252B42] mb-2'>
              Loudest à la Madison #1
              (L&apos;integral)
            </h4>
            <p className='text-sm text-[#737373] mb-1 '>We focus on ergonomics and meeting
              you where you work. It&apos;s only a
              keystroke away.</p>
            <div className='flex justify-between items-center h-[50px] text-sm text-[#737373]'>
              <span><BiAlarm className='text-[#23A6F0] size-4 inline mr-2' /> 22 April 2021</span>

              <span><Image src="/featured-posts-icon2.png" alt="Comments chart" width={16} height={16}  className='size-4 inline mr-2' />10 comments</span>
            </div>
            <Link href="/" className='font-bold text-sm text-[#737373] '>Learn More <IoIosArrowForward className='text-[#23A6F0] size-8 inline ml-2' /></Link>

          </div>

        </div>

        {/* card 2 */}
        <div className='bg-white shadow-lg  '>

          <div className='relative'>
            <Image src="/featured-posts2.png" alt="Post 1" width={300} height={348} className='w-full h-auto object-cover' />
            <span className='bg-[#E74040] text-white font-bold text-sm absolute top-4 left-4 px-4 py-1 rounded'>NEW</span>
          </div>

          <div className='p-4 '>
            <div className='space-x-4 text-[#737373] text-xs mb-1'>
              <span className='text-[#8EC2F2]'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h4 className='text-xl text-[#252B42] mb-2'>
              Loudest à la Madison #1
              (L&apos;integral)
            </h4>
            <p className='text-sm text-[#737373] mb-1 '>We focus on ergonomics and meeting
              you where you work. It&apos;s only a
              keystroke away.</p>
            <div className='flex justify-between items-center h-[50px] text-sm text-[#737373]'>
              <span><BiAlarm className='text-[#23A6F0] size-4 inline mr-2' /> 22 April 2021</span>

              <span><Image src="/featured-posts-icon2.png" alt="Comments chart" className='size-4 inline mr-2' width={16} height={16} />10 comments</span>
            </div>
            <Link href="/" className='font-bold text-sm text-[#737373] '>Learn More <IoIosArrowForward className='text-[#23A6F0] size-8 inline ml-2' /></Link>

          </div>

        </div>
        {/* card 3 */}
        <div className='bg-white shadow-lg  '>

          <div className='relative'>
            <Image src="/featured-posts3.png" alt="Post 1" width={300} height={348} className='w-full h-auto object-cover' />
            <span className='bg-[#E74040] text-white font-bold text-sm absolute top-4 left-4 px-4 py-1 rounded'>NEW</span>
          </div>

          <div className='p-4 '>
            <div className='space-x-4 text-[#737373] text-xs mb-1'>
              <span className='text-[#8EC2F2]'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h4 className='text-xl text-[#252B42] mb-2'>
              Loudest à la Madison #1
              (L&apos;integral)
            </h4>
            <p className='text-sm text-[#737373] mb-1 '>We focus on ergonomics and meeting
              you where you work. It&apos;s only a
              keystroke away.</p>
            <div className='flex justify-between items-center h-[50px] text-sm text-[#737373]'>
              <span><BiAlarm className='text-[#23A6F0] size-4 inline mr-2' /> 22 April 2021</span>

              <span><Image src="/featured-posts-icon2.png" alt="Comments chart" width={16} height={16} className='size-4 inline mr-2' />10 comments</span>
            </div>
            <Link href="/" className='font-bold text-sm text-[#737373] '>Learn More <IoIosArrowForward className='text-[#23A6F0] size-8 inline ml-2' /></Link>

          </div>

        </div>


      </div>

    </section>
  )
}

export default FeaturedPosts