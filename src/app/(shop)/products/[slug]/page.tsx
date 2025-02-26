'use client'
import { useCart } from "@/context/CartContext";
import BrandShowcase from "@/components/BrandShowcase";
import Breadcrum from "@/components/Breadcrum";
import Loader from "@/components/Loader";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductBySlug, getProducts } from "@/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null)
  const [bestSellers, setBestSellers] = useState<Product[] | null>()
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const isWishlisted = wishlist.some((item) => item._id === product?._id);


  useEffect(() => {
    const fetchData = async () => {
      //getting product
      const fetchedProduct = await getProductBySlug(params.slug);
      // getting products
      const fetchedBestSellers = await getProducts();

      setProduct(fetchedProduct)
      setBestSellers(fetchedBestSellers)

    }

    fetchData()


  }, [params.slug])


  // console.log("product ===", product)

  if (!product) return <Loader/>;


  return (
    <>
      <Breadcrum />

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 py-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-col lg:flex-row lg:items-start">
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full">
                <Image
                  src={product.image_url}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
              <h2 className="text-sm uppercase text-gray-500 tracking-widest">
                Bandage
              </h2>
              <h1 className="text-gray-900 text-2xl sm:text-3xl font-medium mb-2">
                {product.title}
              </h1>

              {/* Rating & Socials */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${index < 4 ? "text-indigo-500" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">4 Reviews</span>
                <div className="flex gap-3 ml-auto">
                  <Link href="https://www.facebook.com/" className="text-gray-500">
                    <i className="bi bi-facebook w-5 h-5"></i>
                  </Link>
                  <Link href="https://www.x.com/" className="text-gray-500">
                    <i className="bi bi-twitter-x w-5 h-5"></i>
                  </Link>
                  <Link href="https://www.instagram.com/" className="text-gray-500">
                    <i className="bi bi-instagram w-5 h-5"></i>
                  </Link>
                </div>
              </div>

              {/* Product Description */}
              <p className="leading-relaxed max-h-[200px] overflow-y-auto">
                {product.description}
              </p>

              {/* Colors & Sizes */}
              <div className="flex flex-wrap gap-4 mt-6 pb-5 border-b border-gray-200">
                {/* Colors */}
                <div className="flex items-center">
                  <span className="mr-3 text-sm">Color</span>
                  <div className="flex gap-2">
                    {product.colors.map((color: string, index: number) => (
                      <button
                        key={index}
                        style={{ backgroundColor: color }}
                        className="w-6 h-6 border border-gray-300 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="flex items-center">
                  <span className="mr-3 text-sm">Size</span>
                  <select className="border border-gray-300 py-1 px-2 rounded text-sm focus:ring-indigo-500">
                    {product.sizes.map((size: string, index: number) => (
                      <option key={index}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pricing & Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <span className="text-xl font-medium text-gray-900">
                  ${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  className="flex-grow sm:flex-none text-white bg-indigo-500 py-2 px-6 rounded hover:bg-indigo-600"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                {/* <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500" >
                  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button> */}
                <button onClick={() => (isWishlisted ? removeFromWishlist(product._id) : addToWishlist(product))}>
          {isWishlisted ? <FavoriteIcon className="text-red-500" /> : <FavoriteBorderOutlinedIcon />}
        </button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <hr className='max-w-[1080px] px-4 mx-auto '/>

     <h2 className="font-bold text-2xl my-16 text-center ">BESTSELLER PRODUCTS</h2>

      <ProductGrid products={bestSellers ?? []} />
      <BrandShowcase />

    </>
  );
}
