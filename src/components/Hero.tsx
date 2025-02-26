import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative max-w-[1440px] mx-auto h-[761px] flex items-center md:pl-20">
      {/* Background Image using Next.js Image Component */}
      <Image
        src="/hero1.png"
        alt="Hero Background"
        fill
        sizes="100vw"
        priority
        quality={80}
        className="object-cover -z-10"
      />

      {/* Content */}
      <div className="relative max-w-[1080px] px-4 mx-auto flex flex-col gap-6 text-white text-center sm:text-left items-center sm:items-start lg:ml-32">
        <h5 className="font-bold">SUMMER 2020</h5>
        <h1 className="font-bold text-[40px] lg:text-[58px]">NEW COLLECTION</h1>
        <h4 className="text-xl max-w-[367px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <Link href="/products">
          <button className="font-bold text-2xl bg-[#2DC071] max-w-[221px] px-6 py-3 hover:bg-green-600 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
