"use client"
import Link from "next/link"
import Image from "next/image"
import type { Category } from "@/types/category"

interface CategoryListProps extends Category{
  itemCount?: number; // optional field for number of items in this category

}

const CategoryList = ({ categories }: { categories: CategoryListProps[] }) => {
  console.log(categories)
  return (
    <div className="max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pb-8 py-6">
      {categories.map((category: CategoryListProps) => (
        <Link href={`/categories/${category?.slug?.current}`} key={category._id} className="block w-full">
          <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src={(category?.image_url) || "/placeholder.svg"}
              alt={category.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=223&width=223" // Fallback image
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
              <span className="text-white font-bold text-center">
                <p className="text-lg mb-1">{category.title}</p>
                <p className="text-sm">{category.itemCount}</p>
              </span>
            </div>
          </div>
        </Link>
      ))}

      {/* Add placeholders if there are fewer than 5 categories */}
      {categories.length < 5 &&
        Array.from({ length: 5 - categories.length }).map((_, index) => (
          <div
            key={`placeholder-${index}`}
            className="relative w-full h-0 pb-[100%] bg-gray-200 rounded-lg flex justify-center items-center"
          >
            <span className="absolute top-[50%] text-gray-500">Coming Soon</span>
          </div>
        ))}
    </div>
  )
}

export default CategoryList

