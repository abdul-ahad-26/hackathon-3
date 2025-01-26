import { client } from "@/sanity/lib/client";
import ClassicProduct from "../components/ClassicProduct";
import EditorsPick from "../components/EditorsPick";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import NeuralUniverse from "../components/NeuralUniverse";
import { Product } from "@/types/product";


const getProducts = async ()=>{
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
          sizes
      }
          `
  )
  return products

}


export default async function HeroSection() {
  const products = await getProducts()
  console.log("products: ",products)
  return (
    <div >
      
      <Hero />
      <EditorsPick />
      <FeaturedProducts products={products}/>
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts/>
              

    </div>


  );
}
