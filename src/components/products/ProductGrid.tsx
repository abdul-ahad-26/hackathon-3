import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {

  console.log("products",products)

  return (
    <div className="max-w-[1080px] mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product._id} product={product}/>
       
      ))}
    </div>
  );
};

export default ProductGrid;
