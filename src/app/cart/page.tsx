'use client'
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate total cart price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-[1440px] mx-auto md:px-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse  ">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-center">Total</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-3 flex items-center space-x-4">
                    <Image src={item.image_url} alt={item.title} width={60} height={60} className="rounded" />
                    <span className="font-medium">{item.title}</span>
                  </td>
                  <td className="p-3 text-center">${item.price.toFixed(2)}</td>
                  <td className="p-3 text-center">{item.quantity}</td>
                  <td className="p-3 text-center font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="max-w-[1440px] mx-auto  mt-6 flex justify-between items-center px-4">
            <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={clearCart} className="bg-gray-600 text-white px-4 py-2 mr-3  rounded hover:bg-gray-700">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}