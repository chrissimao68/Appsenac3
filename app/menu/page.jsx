import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-mist-300 font-sans w-screen h-screen">
      <section className="grid lg:grid-cols-[300px_1fr] bg-pink-200 lg:grid-rows-[60px_1fr_60px] w-full h-full ">
        <main className="bg-blue-950 text-white  gap-4 flex flex-col pt-10 pl-4 row-span-2">
          <h1 className="text-3xl font-bold">SENAC MINAS</h1>
          <nav className="flex flex-col gap-3 mt-5">
            <Link href="/menu" className=" text-white font-bold w-full ">
              Menu
            </Link>
            <Link href="/login" className=" text-white font-bold w-full  ">
              Cadastro
            </Link>
            <Link href="/login" className=" text-white font-bold w-full ">
              Relatório
            </Link>
          </nav>
          <a
            href="/login"
            className="w-[95%] h-12 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-300 hover:duration-300 flex flex-col items-center justify-center"
          >
            Sair
          </a>
        </main>
        <header className="bg-blue-950 text-white text-center flex items-center justify-center ">
          <h1 className="text-2xl font-bold">SENAC MINAS</h1>
        </header>

        <div className="bg-black text-white   gap-5 flex flex-col items-center pt-10">
          <div className=" w-[90%] h-25 flex flex-col bg-white rounded-lg"></div>
        </div>

        <footer className="bg-blue-950 text-white text-center col-span-2 flex items-center justify-center ">
          <p>&copy; 2026 SENAC MINAS. Todos os direitos reservados.</p>
        </footer>
      </section>
    </div>
  );
}
