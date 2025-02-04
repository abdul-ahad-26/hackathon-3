'use client'
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const { addToCart } = useCart();

  console.log(products)
  return (
    <div className="max-w-[1080px]  mx-auto px-4  py-8 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} >
          <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <Link href={`/products/${product.slug?.current}`}>

              <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                <Image
                  src={product.image_url}
                  alt={product.title}
                  fill
                  style={{ objectFit: "contain" }} className='p-4'
                />
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/product/${product.slug?.current}`}>


                <h3 className="text-lg font-semibold">{product.title}</h3>
              </Link>

              <p className="text-gray-500 text-sm truncate">{product.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xl font-bold text-gray-900">${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
                {product.isNew && (
                  <span className="bg-gray-400 text-white text-xs font-semibold px-2 py-1 rounded">
                    New
                  </span>
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
              <button className="mt-4 w-full bg-[#2DC071] text-white py-2 rounded hover:bg-green-600 transition " onClick={() => { addToCart(product) }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;


//  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
// {products.map((product: any) => (
//   <div key={product._id} className='hover:scale-105 transition-transform shadow-lg'>
//     <Image
//       src={product.image_url}
//       height={427}
//       width={239}
//       className='w-full h-auto object-cover'
//       alt={product.name}
//     />
//     <div className='flex flex-col items-center text-center gap-3 py-6'>
//       <p className='font-bold text-[#252B42]'>{product.name}</p>
//       <p className='font-bold text-[#737373] text-sm'>{product.department}</p>
//       <div className='flex items-center gap-2 font-bold'>
//         <span className='text-[#BDBDBD]'>{product.oldPrice}</span>
//         <span className='text-[#23856D]'>{product.price}</span>
//       </div>
//       <div className='flex space-x-2'>
//         {product.colors.map((color: any, index: any) => (
//           <span
//             key={index}
//             className='border rounded-xl h-5 w-5'
//             style={{ backgroundColor: color }}
//           ></span>
//         ))}
//       </div>
//     </div>
//   </div>
// ))}
// </div> 