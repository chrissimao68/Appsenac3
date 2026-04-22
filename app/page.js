import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex   items-center justify-center bg-mist-900 font-sans w-screen h-screen">
      <section className="w-[17%] h-screen flex flex-col items-center  gap-10 bg-blue-950 rounded-lg shadow-lg pt-10">
        <img src="/senaclogo.png" alt="Logo" className="h-20 w-35" />
        <div className="flex flex-col  h-[40%] gap-8 mt-20 text-orange-500 text-xl font-sans">
          <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/"
          >
            Menu Principal
          </a>
          <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/IMC"
          >
            App de IMC
          </a>
          <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/idade"
          >
            App Idade do Aluno
          </a>
          <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/ABC"
          >
            App Somando Números (Array)
          </a>
          <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/CRUD"
          >
            App CRUD (Array)
          </a>
           <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/CRUD2"
          >
            App CRUD 2 (Array)
          </a>
           <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/ficha"
          >
            Ficha de Alunos
          </a>
           <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/json"
          >
            Json
          </a>
           <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/login"
          >
            Logar
          </a>
           <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/menu"
          >
            Menu
          </a>
           <a
            className="w-full h-9  hover:bg-blue-900 hover:text-gray-200 rounded-xl transition-colors duration-300  pl-2 items-center flex"
            href="/teste"
          >
            Teste
          </a>
        </div>
      </section>
      <section className="h-screen w-[83%] flex flex-col items-center justify-center gap-4">
        <div className="w-[30%] h-[20%]  flex flex-col gap-2 items-center">
          <h1 className="text-orange-600 text-2xl">Bem Vindo!</h1>
          <p className="text-xl text-white">
            Aplicativos Web do Curso Senac 2026
          </p>
          <p className="font-style italic text-white">Turma 027</p>
        </div>
      </section>
    </div>
  );
}
