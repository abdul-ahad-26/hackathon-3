import React from 'react';
import Link from 'next/link';
import { Category } from '@/types/category';

const CategoryList = ({ categories }: {categories:Category[]}) => {
  console.log("categories:", categories)
  return (
    <div className="max-w-[1080px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pb-8 place-items-center">
      {categories.map((category: Category) => (
        <Link href={`/categories/${category?.slug?.current}`} key={category._id}>

          <div

            className="w-full h-[223px] flex justify-center items-center hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `url('${category.image_url}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="flex flex-col gap-2 text-white font-bold text-center">
              <p>{category.title}</p>
              <p>5 items</p>
            </span>
          </div>
        </Link>
      ))}

      {/* Add placeholders if there are fewer than 5 categories */}
      {categories.length < 5 &&
        Array.from({ length: 5 - categories.length }).map((_, index) => (
          <div
            key={`placeholder-${index}`}
            className="w-full h-[223px] flex justify-center items-center bg-gray-200"
          >
            <span className="text-gray-500">Coming Soon</span>
          </div>
        ))}
    </div>
  );
};

export default CategoryList;