import ClassicProduct from "../components/ClassicProduct";
import EditorsPick from "../components/EditorsPick";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import NeuralUniverse from "../components/NeuralUniverse";
import { getProducts } from "@/lib/queries";





export default async function Home() {
  const products = await getProducts(6)
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
