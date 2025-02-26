import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  itemCount: number;
  imageUrl: string;
  categorySlug: string;  // e.g. "cloths", "shoes"
}

export default function CategoryCard({
  title,
  itemCount,
  imageUrl,
  categorySlug
}: CategoryCardProps) {
  return (
    <Link href={`/category/${categorySlug}`} className="relative block group">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={400}
        className="object-cover w-full h-full"
      />

      {/* Overlay with Title & Count */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-white text-sm">{itemCount} Items</p>
      </div>
    </Link>
  );
}
