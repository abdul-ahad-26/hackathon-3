import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";
import HeaderTop from "../components/header/HeaderTop";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
// import { CartProvider } from "./context/CartContext";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Bandage - Premium Clothing",
  description: "Welcome to Bandage, your ultimate destination for premium fashion. At Bandage, we believe that clothing is more than just fabric—it's a statement of individuality, elegance, and confidence. Our curated collection features timeless designs, luxurious materials, and impeccable craftsmanship, ensuring you always step out in style. Whether you're looking for sophisticated everyday wear or standout pieces for special occasions, Bandage offers the perfect blend of comfort and sophistication. Elevate your wardrobe with Bandage, where fashion meets artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <CartProvider>
        <WishlistProvider>
          <HeaderTop />
          <Header />

          {children}
          <Footer />
          </WishlistProvider>
        </CartProvider>

      </body>
    </html>
  );
}
