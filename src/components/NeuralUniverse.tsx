import React from 'react'
import Image from 'next/image'

const NeuralUniverse = () => {
  return (
    <section className="bg-white pt-20 md:pt-0">
    <div className="max-w-[1080px] px-4 mx-auto flex flex-col md:flex-row items-center gap-20 ">

      {/* Image Section */}
      <div className=" md:w-1/2 order-last md:order-none">
        <Image src="/neural-universe.png" width={704} height={682} alt="Two people in sweaters"  priority />
      </div>

      {/* Text Section */}
      <div className="w-[305px] md:w-[375px] text-center md:text-left ">
        <p className="text-sm text-[#737373] font-bold uppercase tracking-widest">Summer 2020</p>
        <h2 className="text-[40px] font-bold  my-4 md:max-lg:my-0 ">
          Part of the Neural Universe
        </h2>
        <p className="text-[#737373]  text-xl mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <a
            href="#"
            className="px-8 py-3 text-sm font-bold bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
          >
            BUY NOW
          </a>
          <a
            href="#"
            className="px-8 py-3 border text-sm font-bold text-[#2DC071] border-[#2DC071] rounded-md shadow hover:bg-green-200  transition"
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NeuralUniverse