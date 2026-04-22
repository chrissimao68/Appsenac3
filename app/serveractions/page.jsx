"use client";
import { servidor } from "@/actions/servidor";

let contador = 0;

export default function ServerAction() {
  async function ChamaServidor() {
    try {
      console.log("Chamou o Servidor");
    } catch {
      console.log("Erro ao Tentar Logar 2");
    } finally {
      console.log("Login Terminou");
    }
  }

  async function cliente() {
    try {
      console.clear();

      console.log("/n/n");

      console.log("Console limpo e ação executada no Front-end (Cliente)");

      console.log("Estou no cliente....." + contador++);

      console.log("Só funciono no Front-end meu amigo....");

      console.log("/n/n");
    } catch (error) {
      console.log("Erro ao Tentar Logar 2", error);
    } finally {
      console.log("Fim de Execução da Action no Front End");
    }
  }
  return (
    <div className=" bg-mist-900 font-sans w-screen h-screen">
      <section className="w-full h-full bg-mist-700 flex justify-center items-center">
        <div className="w-[30%] h-[35%] bg-white rounded-2xl border-6 border-green-800 flex flex-col items-center pt-5 gap-6">
          <h1 className="text-3xl ">Server Action</h1>
          <button
            onClick={cliente}
            type="buttom"
            className="w-[90%] h-11 bg-green-800 border-4 border-green-900 text-white rounded-md"
          >
            Ações do Servidor (Back- END)
          </button>
          <button
            onClick={ChamaServidor}
            type="buttom"
            className="w-[90%] h-11 bg-blue-800 border-4 border-blue-900 text-white rounded-md"
          >
            Ações do Cliente (Front- END)
          </button>
          <button className="w-[90%] h-11 bg-gray-200 border-4 border-gray-600 text-black rounded-md">
            Dashboard
          </button>
        </div>
      </section>
    </div>
  );
}
