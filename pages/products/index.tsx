import Link from "next/link";
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

    </main>
  );
}
