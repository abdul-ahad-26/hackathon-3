"use client";
import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md">
              <Link href={`/product/${product.slug.current}`}>
                <Image src={product.image_url} alt={product.title} width={300} height={300} className="rounded-md" />
              </Link>

              <div className="flex justify-between items-center mt-3">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <button onClick={() => removeFromWishlist(product._id)}>❌</button>
              </div>

              <p className="text-gray-600">PKR {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
