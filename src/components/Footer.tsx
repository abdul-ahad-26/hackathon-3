'use client'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';





const Footer = () => {
    return (
        <footer>
            {/* banner top */}
            <div className='bg-[#FAFAFA]'>
                <div className='max-w-[1080px] px-4 mx-auto flex justify-between h-[140px] items-center '>
                    <div>
                        <h2 className='font-bold text-2xl'>Bandage</h2>
                    </div>
                    <div className='flex gap-4  text-[#23A6F0]'>
                        <Link href="https://www.facebook.com/"><FacebookOutlinedIcon /></Link>
                        <Link href="https://www.instagram.com/"><InstagramIcon /></Link>
                        <Link href="https://www.x.com/"><TwitterIcon /></Link>
                    </div>
                </div>
            </div>
            <hr className='max-w-[1080px] px-4 mx-auto '/>

            {/* footer body */}
            <div className=" py-16">
                <div className="max-w-[1080px] px-4 mx-auto ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
                        {/* Column 1 */}
                        <div>
                            <h3 className="font-bold text-lg mb-5">Company Info</h3>
                            <ul>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">About Us</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">Carrier</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">We are hiring</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] hover:text-black transition">
                                    <a href="/">Blog</a>
                                </li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div>
                            <h3 className="font-bold text-lg mb-5">Legal</h3>
                            <ul>
                            <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">About Us</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">Carrier</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">We are hiring</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] hover:text-black transition">
                                    <a href="/">Blog</a>
                                </li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div>
                            <h3 className="font-bold text-lg mb-5">Features</h3>
                            <ul>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">Business Marketing</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">User Analytics</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">Live Chat</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] hover:text-black transition">
                                    <a href="/">Unlimited Support</a>
                                </li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div>
                            <h3 className="font-bold text-lg mb-5">Resources</h3>
                            <ul>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">iOS & Android</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">Watch a Demo</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] mb-3 hover:text-black transition">
                                    <a href="/">Customers</a>
                                </li>
                                <li className="text-sm font-bold text-[#737373] hover:text-black transition">
                                    <a href="/">API</a>
                                </li>
                            </ul>
                        </div>
                        {/* Column 5 */}
                        <div className="lg:col-span-2">
                            <h3 className="font-bold text-lg mb-5">Get In Touch</h3>
                            <form className="flex  mb-5">
                                <input
                                    type="text"
                                    placeholder="Your Email"
                                    className="p-3 w-full bg-[#E6E6E6] text-[#737373] text-sm rounded focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <button
                                    type="submit"
                                    className="p-3 bg-[#23A6F0] text-sm text-white rounded hover:bg-[#1e90d6] transition"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-xs text-[#737373]">
                                Stay updated with our latest news and offers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* banner bottom */}
            <div className='bg-[#FAFAFA]'>
                <div className='max-w-[1080px] px-4 mx-auto flex  h-[75px] text-center md:text-start items-center'>
                    <p className='text-[#737373] font-bold text-sm'>Made With Love By Finland All Right Reserved </p>

                </div>

            </div>


        </footer>

    )
}

export default Footer