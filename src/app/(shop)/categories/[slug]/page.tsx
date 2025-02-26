import BrandShowcase from "@/components/BrandShowcase";
import Breadcrum from "@/components/Breadcrum";
import ProductGrid from "@/components/products/ProductGrid";
import { getProducts, getProductsByCategory } from "@/lib/queries";







export default async function CategoryWiseProducts({ params }: { params: { slug: string } }) {
  
console.log("parama: ",params)
  //Get products by category
  const productsByCategory = await getProductsByCategory(params.slug)

  //Get Best seller products
  const bestSellerProducts = await getProducts(6);


  if (productsByCategory.length<=0) return <div className="p-6 text-red-500 text-center text-2xl">Product not found</div>;

  return (
    <>
   
      <Breadcrum />

     <ProductGrid products={productsByCategory}/>

      <ProductGrid products={bestSellerProducts} />
      <BrandShowcase />

    </>
  );
}
