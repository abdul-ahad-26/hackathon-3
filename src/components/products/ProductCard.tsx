'use client'
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/context/WishlistContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = wishlist.some((item) => item._id === product._id);
  return (
    <div
      key={product._id}
      className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full"
    >
      <Link href={`/products/${product.slug?.current}`}>
        {/* Aspect Ratio for Image Container */}
        <div className="relative w-full aspect-[4/5] bg-gray-100 flex items-center justify-center">
          <Image
            src={product?.image_url}
            alt={product.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Content should fill the available space */}
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/products/${product.slug?.current}`}>
          <h3 className="text-lg font-semibold">{product.title}</h3>
        </Link>
        <p className="text-gray-500 text-sm truncate">{product.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            ${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}
          </p>
          {product.isNew && (
            <span className="bg-[#737373] text-white text-xs font-semibold px-2 py-1 rounded">New</span>
          )}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-600 text-sm">Quantity: {product.quantity}</span>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-gray-500 line-through">
              ${(product.price).toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {product.colors.map((color: string, index: number) => (
            <span key={index} className="border rounded-full h-6 w-6" style={{ backgroundColor: color }}></span>
          ))}
        </div>

        {/* Pushes the button to the bottom */}
        <div className="mt-auto flex gap-2 items-center">
          <Button
            variant="outline"
            className="w-full mt-4 bg-[#23A6F0] text-white hover:bg-blue-600 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
          <button className=" mt-4" onClick={() => (isWishlisted ? removeFromWishlist(product._id) : addToWishlist(product))}>
          {isWishlisted ? <FavoriteIcon className="text-red-500" /> : <FavoriteBorderOutlinedIcon />}
        </button>
        </div>
        
      </div>

    </div>
  )
}

export default ProductCard