"use client"
import React from 'react'
import { HiOutlinePhone } from 'react-icons/hi'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Link from 'next/link';


const HeaderTop = () => {
  return (
    <section className='bg-[#252B42]'>
      <div className="h-[58px] max-w-[1440px] mx-auto px-10  text-white font-bold text-sm  items-center justify-between hidden lg:flex xl:text-base">
        <div className=' flex gap-6  '>
          <div className="flex items-center gap-2">
            <HiOutlinePhone />
            <p>(225) 555-018</p>
          </div>
          <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope size-5" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <p className='items-center'>Follow Us  and get a chance to win 80% off</p>
        <div className=' flex items-center gap-[10px] '>
          <p>Follow Us :</p>
          <Link href="/"><InstagramIcon /></Link>
          <Link href="/"><YouTubeIcon /></Link>
          <Link href="/"><FacebookRoundedIcon /></Link>
          <Link href="/"><TwitterIcon /></Link>
        </div>
      </div>
    </section>
  )
}

export default HeaderTop