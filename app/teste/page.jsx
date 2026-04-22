import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex   items-center justify-center font-sans w-screen h-screen">
      <div className=" w-full h-full bg-gray-300 grid grid-cols-3 gap-4 p-4">
        <div className="w-20 h-20 bg-blue-500"></div>
        <div className="w-20 h-20 bg-red-500"></div>
        <div className="w-20 h-20 bg-green-500"></div>
      </div>
    </div>
  );
}
