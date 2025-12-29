import { useRouter } from "next/router";
import Image from "next/image";
import { product } from "../data/products";
import NotFound from "../404";
export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query

  if (!slug) return null

  const Product = product.find((p) => p.slug === slug )

  if (!Product){
    return (
      <NotFound />
    )
  }
  return (
    <main className="min-h-screen  flex items-center justify-center p-10">
      <div className="max-w-7xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 text-white grid md:grid-cols-2 gap-8">
        
        <Image src={Product.image} alt={Product.title} width={500} height={500} className="rounded-2xl object-cover" />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">
              {Product.title}
            </h1>

          </div>

          <div>
           
            <p className="text-2xl font-medium mt-6">
              {Product.category} 
            </p>
            <p className="text-2xl font-medium  mt-6">
              {Product.brand} 
            </p>
            <p className="text-2xl font-medium  mt-6">
              {Product.location} 
            </p>
             <p className="text-3xl font-bold text-green-400 mt-6">
              {Product.price} $
            </p>

            <button onClick={() => router.back()} className="mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition" >
               back
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
