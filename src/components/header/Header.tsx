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
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from '@/context/CartContext';
import { getCategories } from '@/lib/queries';
import { Category } from '@/types/category';
import { useWishlist } from '@/context/WishlistContext';

export default function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);


  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 py-4 md:px-10">
        <div className="flex items-center justify-between flex-wrap">

          {/* Left Logo */}
          <Link href="/" >
            <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex text-[#737373] text-sm font-bold flex-grow justify-center">
            <ul className="flex items-center gap-8">
              <li><Link href="/" className='hover:text-gray-700' >Home</Link></li>
              <li className="relative flex items-center gap-1">
                {/* Shop text navigates to /shop */}
                <Link href="/products" className="hover:text-gray-700" >
                  Shop
                </Link>
                {/* Dropdown trigger for categories */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center hover:text-gray-700">
                    <KeyboardArrowDownSharpIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg rounded-lg py-2 w-[200px]">
                    <DropdownMenuLabel><Link href="/categories" className='px-2 font-semibold hover:bg-gray-100' >Categories</Link></DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categories.length > 0 ? (
                      categories.map((category: Category) => (
                        <DropdownMenuItem
                          key={category._id}
                          className="px-4 py-2 text-base hover:bg-gray-100"
                        >
                          <Link href={`/categories/${category.slug.current}`} >
                            {category.title}
                          </Link>
                        </DropdownMenuItem>
                      ))
                    ) : (
                      <DropdownMenuLabel className="px-4 py-2 text-base">No Categories</DropdownMenuLabel>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li><Link href="/pricing" className="hover:text-gray-700" >Pricing</Link></li>
              <li><Link href="/about" className="hover:text-gray-700" >About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-700" >Contact</Link></li>
            </ul>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center  text-[#23A6F0] ">
            <Link href="/" className="  hidden sm:flex items-center gap-1 hover:text-blue-700">
              <PermIdentityIcon className="text-[20px]" />
              <span>Login / Register</span>
            </Link>
            <Link className=" ml-4 flex items-center" href="/cart" >
              <i className="bi bi-cart text-2xl cursor-pointer hover:text-blue-700"></i>
              <span className="text-sm px-1.5 py-0.5 font-normal hidden sm:inline">{cart?.length ?? 0}</span>
            </Link>
            <Link href="/wishlist" className=" ml-4 hidden sm:flex items-center gap-1">
              <FavoriteBorderOutlinedIcon className="text-[20px]" />
              <span className="text-sm px-1.5 py-0.5 font-normal">{wishlist?.length ?? 0}</span>
            </Link>

            {/* Mobile Menu */}
            <Sheet >
              <SheetTrigger>
                <BiMenuAltRight className="text-2xl lg:hidden cursor-pointer ml-4" />
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col text-[#252B42] text-lg font-bold gap-6 mt-6">
                  <Link href="/sign-in" className="mt-4 text-[#23A6F0] hover:text-blue-700 sm:hidden ">Login / Register</Link>
                  <Link href="/" >Home</Link>
                  <Link href="/shop" >Shop</Link>
                  <Link href="/categories" >Categories</Link>
                  <Link href="/pricing" >Pricing</Link>
                  <Link href="/about" >About</Link>
                  <Link href="/contact" >Contact</Link>
                  <Link href="/wishlist" className=" sm:hidden ">Wishlist</Link>

                </nav>
              </SheetContent>

            </Sheet>

          </div>
        </div>
      </div>
    </header>
  );
}
