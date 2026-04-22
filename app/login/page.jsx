"use client";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TelaLogin() {
  const [nome, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  async function Logar(e) {
    e.preventDefault();

    // validando se tem o nome e a senha definidos
    if (nome && senha) {
      // pega a resposta da Server Action
      const res = await login(nome, senha);
      console.log("Resposta do Servidor", res);
      if (res?.success) {
        console.log("Usuário Autenticado com Sucesso ...");
        console.log("REDIRECIONANDO ...");
        router.push("/menu");
        //router.refresh();
      } else {
        alert("Erro ao Logar verificar com o Adm ");
      }
    } else {
      alert("Favor Informar Usuário e Senha ");
    }
  }

  return (
    <div className="bg-gray-300 font-sans w-screen h-screen">
      <section className="grid grid-cols-2 w-full h-full">
        <div className="bg-amber-950 text-white flex items-center justify-center">
          <div className="w-96 flex flex-col items-center text-center gap-5">
            <h1 className="text-4xl font-bold">MEU SISTEMA</h1>
            <p>
              Gerencie sua vida, vendas e resultados de forma simples e
              eficiente.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 flex items-center justify-center">
          <div className="w-[40%] flex flex-col items-center gap-5">
            <form className="bg-white w-full flex flex-col gap-3 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-center">Login</h2>

              <p>Nome:</p>
              <input
                className="w-full h-12 bg-gray-100 rounded-lg pl-2 outline-none"
                type="text"
                value={nome}
                placeholder="Digite seu nome"
                onChange={(e) => setUsername(e.target.value)}
              />

              <p>Senha:</p>
              <input
                className="w-full h-12 bg-gray-100 rounded-lg pl-2 outline-none"
                type="password"
                value={senha}
                placeholder="Digite sua senha"
                onChange={(e) => setSenha(e.target.value)}
              />

              <button
                onClick={Logar}
                type="button"
                className="bg-amber-950 hover:bg-amber-700 text-white font-bold w-full h-12 rounded"
              >
                Entrar
              </button>
            </form>

            <p className="italic text-sm text-gray-500 text-center">
              © 2026 christopher.souza@gmail.com <br />
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
