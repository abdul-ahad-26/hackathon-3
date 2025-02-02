import BrandShowcase from "@/components/BrandShowcase";
import Breadcrum from "@/components/Breadcrum";
import ProductGrid from "@/components/ProductGrid";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

// import best seller products from sanity
const getBestSellerProducts = async () => {

  //fetch
  const products = await client.fetch<Product[]>(
    `
           *[_type=="product"][0..5]{
        _id,
            title,
          description,
          "image_url":image.asset->url,
          price,
          category,
          quantity,
          "discountPercentage":discountPercent,
          isNew,
          colors,
          sizes,
          slug
      }
          `
  )
  return products

}

//import product from sanity
const getProductBySlug = async (slug: string) => {
  //fetch
  const product = await client.fetch<Product>(
    `*[_type=="product" && slug.current == "${slug}" ]
    {
        _id,
            title,
          description,
          "image_url":image.asset->url,
          price,
          category,
          quantity,
          "discountPercentage":discountPercent,
          isNew,
          colors,
          sizes,
          slug
      }[0]
  `
  )

  return product


}


export default async function ProductDetailPage({ params }: { params: { slug: string } }) {

  //getting product
  const product = await getProductBySlug(params.slug);

  // getting products
  const bestSellerProducts = await getBestSellerProducts();

  console.log("product ===", product)

  if (!product) return <div className="p-6 text-red-500 text-center text-2xl">Product not found</div>;

  return (
    <>
      <Breadcrum />

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            <Image
              src={product.image_url}
              alt={product.title}
              height={630}
              width={393.594}

              className="lg:w-1/2 w-full lg:h-auto h-64 object-contain self-start mt-8 rounded"

              priority
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Bandage
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-4 ">
                  <Link className="text-gray-500" href="https://www.facebook.com/">
                    <i className="bi bi-facebook w-5 h-5"></i>
                  </Link>
                  <Link className="text-gray-500" href="https://www.x.com/">
                    <i className="bi bi-twitter-x w-5 h-5 "></i>
                  </Link>
                  <Link className="text-gray-500" href="https://www.instagram.com/">
                    <i className="bi bi-instagram w-5 h-5"></i>
                  </Link>
                </span>
              </div>
              <p className="leading-relaxed line-clamp-5">
                {product.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {product.colors.map((color: string, index: number) => (
                    <button key={index} style={{ backgroundColor: color }} className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                  ))}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {
                        product.sizes.map((size: string, index: number) => {
                          return <option key={index}>{size}</option>
                        })
                      }


                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="title-font font-medium text-xl text-gray-900">
                  ${(product.price - (product.price * (product?.discountPercentage / 100))).toFixed(2)}
                </span>
                <span className="title-font font-medium text-xl text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid products={bestSellerProducts} />
      <BrandShowcase />

    </>
  );
}
