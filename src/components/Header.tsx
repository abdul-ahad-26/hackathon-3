'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { BiMenuAltRight } from "react-icons/bi";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCart } from '@/app/context/CartContext';
import { getCategories } from '@/lib/queries';
import { Category } from '@/types/category';


export default  function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-background/50 backdrop-blur border-b">
      <div className="max-w-[1440px] mx-auto px-4 py-4 md:px-10">
        <div className="flex items-center justify-between   flex-wrap ">

          {/* Left Logo */}
          <div className="w-0 md:w-[185px]">
            <Link href="/"><h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1></Link>
          </div>

          {/* Center Navigation */}
          <nav className={`order-last  w-full  lg:order-none  ${isMenuOpen ? "block" : "hidden"}  lg:flex  text-[#737373]  md:w-[360px] flex-grow ml-6 md:ml-0`}>
            <ul className="flex flex-col lg:flex-row gap-6 py-24 lg:py-0 text-[#737373] text-3xl md:text-sm md:font-bold text-center justify-center items-center">
              <li > <Link href="/" className='hover:text-black'>Home</Link></li>
              <li >
                <Link href="/shop" className='hover:text-black'>shop</Link>
                <DropdownMenu >
                  <DropdownMenuTrigger><KeyboardArrowDownSharpIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link href="/categories"><DropdownMenuLabel>Categories</DropdownMenuLabel></Link>
                    <DropdownMenuSeparator />
                    {categories && (categories.map((category: Category) => (
                      <Link key={category._id} href={`/categories/${category.slug.current}`}><DropdownMenuItem>{category.title}</DropdownMenuItem></Link>)
                    ))
                    }

                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              {/* <Link href="/product" className=" hover:text-black "><li>Product</li></Link> */}
              <Link href="/pricing" className=" hover:text-black "><li>Pricing</li></Link>
              <Link href="/about" className=" hover:text-black"><li >About</li></Link>
              <Link href="/blog" className="hidden md:inline hover:text-black"><li >Blog</li> </Link>
              <Link href="/contact" className='hover:text-black'><li >Contact</li></Link>
              <Link href="/team" className="hidden md:inline hover:text-black" ><li >team</li></Link>


            </ul>
          </nav>


          {/* Right Icons */}
          <div className="flex  justify-end   text-[#252B42] items-center gap-4 md:gap-6 md:text-[#23A6F0] font-bold text-sm">
            <Link href="/" className=" items-center gap-1 hover:text-blue-700 hidden sm:flex">
              <PermIdentityIcon className="text-[20px] " />
              <span className="hidden sm:inline">Login / Register</span>
            </Link>


            <i className="cursor-pointer text-xl hover:text-blue-700  bi bi-search"></i>

            <Link className="flex  items-center" href="/cart" >
              <i className=" bi bi-cart text-2xl cursor-pointer hover:text-blue-700  "></i>
              <span className="text-sm px-1.5 py-0.5 font-normal hidden sm:inline">
                {cart.length}
              </span>
            </Link>

            <Link className="  hidden sm:flex " href="/wishlist">
              <FavoriteBorderOutlinedIcon
                className=" size-6 cursor-pointer hover:text-blue-700 "
              />
              <span className="text-sm  px-1.5 py-0.5 font-normal   ">
                1
              </span>
            </Link>
            <BiMenuAltRight className="text-2xl lg:hidden cursor-pointer  " onClick={() => setIsMenuOpen(!isMenuOpen)} />

          </div>
        </div>

      </div>
    </header>
  );
}
