import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";

// Get All Categories
export async function getCategories() {
  const query = `*[_type == "category"]{
    _id,
    "image_url":image.asset->url,
    title,
    slug,
    description
  }`;
  
  return await client.fetch(query);
}

// Get All  Products by Category
export async function getProductsByCategory(categorySlug:string){

  const query = `*[_type == "product" && $categorySlug in category[]->slug.current]
  {
        _id,
            title,
          description,
          "image_url":image.asset->url,
          price,
          category,
          quantity,
          discountPercentage,
          isNew,
          colors,
          sizes,
          slug
      }`

      return await client.fetch(query,{categorySlug})

}

// Get Products ALL or Some
export const getProducts = async (count?:number) => {
  const query = `
          *[_type=="product"]${count?`[0...${count}]`:''}{
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
     
    return await client.fetch<Product[]>(query)

}

//import product from sanity
export const getProductBySlug = async (slug: string) => {
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
          discountPercentage,
          isNew,
          colors,
          sizes,
          slug
      }[0]
  `
  )

  return product


}