import { useRouter } from "next/router";
export default function NotFound() {
    const router = useRouter()
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="mt-4 text-3xl text-gray-400">
       NotFound
      </p>
      <p onClick={() => router.back()} className=" text-white h-40 flex items-center text-6xl font-sans ">back</p>
    </div>

  );
}
