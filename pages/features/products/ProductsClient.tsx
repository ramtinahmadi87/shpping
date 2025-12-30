"use client"
import { useState } from "react"
import { product } from "../../data/products"
import Link from "next/link"
import Image from "next/image"


export default function ProductsClient() {
  const [brand, setBrand] = useState("all")
  const [category, setCategory] = useState("all")
  

  const filtered = product.filter(item =>
      (brand === "all" || item.brand === brand) &&
      (category === "all" || item.category === category)
  )

  return (
    <div>
      <div className="flex gap-4 p-4 bg-blur-100 max-h-screen items-start justify-start">
        <div className="flex gap-2 glass-select p-4 rounded-xl shadow-lg">
          <select className="border-none bg-transparent text-black px-4 py-2 rounded-lg backdrop-blur-md" onChange={e=>setBrand(e.target.value)}>
            <option value="all">All brands</option>
            <option value="IPhone">IPhone</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Realme">Realme</option>
            <option value="Huawei">Huawei</option>
            <option value="Benz">Benz</option>
            <option value="BMW">BMW</option>
            <option value="Dodge">Dodge</option>
          </select>
          <select className="border-none bg-transparent text-black px-4 py-2 rounded-lg backdrop-blur-md" value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="all">All category</option>
            <option value="Phone">Phone</option>
            <option value="Book">Book</option>
            <option value="Car">Car</option>
            <option value="Home">Home</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto mt-32">
        {filtered.map(item=>(
          <Link key={item.id} href={`/products/${item.slug}`} className="group bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg rounded-3xl overflow-hidden hover:scale-[1.02] transition cursor-pointer">
            <Image src={item.image} alt={item.title} width={600} height={400} className="object-cover h-64 w-full" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="text-gray-400 mt-2">{item.brand}</p>
              <p className="text-gray-400 mt-2">{item.category}</p>
              <p className="text-gray-500 font-medium text-3xl mt-2">{item.price} $</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
