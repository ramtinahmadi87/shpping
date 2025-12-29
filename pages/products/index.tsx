
import Link from "next/link";
import Image from "next/image";
import { product } from "../data/products"

export default function Home() {
  
  return (
    <main className="min-h-screen p-10">

      <header className="flex justify-between items-center h-20 px-8 py-4 bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg">
        <h1 className="text-2xl font-bold">MyStore</h1>

  
        <div className="flex gap-4">
          <Link className="text-gray-600 text-2xl hover:text-black" href={`/`}>Home</Link>
          <Link className="text-gray-600 text-2xl hover:text-black" href={`/products`}>Products</Link>
          <Link className="text-gray-600 text-2xl hover:text-black" href={`/`}>About</Link>
          
        </div>
      </header> 



      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto mt-32 ">
        {product.map((item) => (
          <Link key={item.id} href={`/products/${item.slug}`}>
            <div className="group bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg rounded-3xl overflow-hidden hover:scale-[1.02] transition cursor-pointer">
              <Image src={item.image} alt={item.title} width={600} height={400} className="object-cover h-64 w-full" />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                  {item.title}
                </h2>
                <p className="text-gray-400 mt-2">
                  {item.brand}
                </p>
                <p className="text-gray-400 mt-2">
                  {item.category}
                </p>
                <p className="text-gray-500 font-medium text-3xl mt-2">
                  {item.price} $
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
