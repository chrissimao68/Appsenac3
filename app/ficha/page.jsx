"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function fichaAluno() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");

  function limparIMC() {
    setNome("");
    setEmail("");
    setIdade("");
    setTelefone("");
    setResultado(null);
  }

  return (
    <div className="flex flex-col  items-center justify-center bg-gray-300 font-sans w-screen h-screen font-lato">
      <section className="w-[70%] h-[90%] flex flex-col items-center justify-center gap-10 bg-black rounded-xl shadow-xl pt-7 pb-7">
        <h1 className="text-5xl text-orange-500">Ficha do Aluno</h1>
        <div className="flex gap-10 w-[90%] h-[80%]  justify-center pt-5 pb-5 pl-5 pr-5">
          <div className="flex flex-col w-[55%] h-full bg-gray-400 rounded-lg items-center justify-center gap-6">
            <input
              className="w-[85%] h-15 bg-gray-200 rounded-2xl pl-2 outline-none pr-2"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome Completo Ex: 'João da Silva'"
            />
            <input
              className="w-[85%] h-15 bg-gray-200 rounded-2xl pl-2 outline-none pr-2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Ex: 'joao.silva@email.com'"
            />
            <input
              className="w-[85%] h-15 bg-gray-200 rounded-2xl pl-2 outline-none pr-2"
              type="text"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Idade Ex: '25'"
            />
            <input
              className="w-[85%] h-15 bg-gray-200 rounded-2xl pl-2 outline-none pr-2"
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Telefone Ex: '11999999999'"
            />
            <button className="w-[85%] h-15 bg-blue-700 rounded-2xl pl-2 text-xl font-bold hover:bg-blue-800 transition-colors duration-300">
              Enviar Dados
            </button>
            <button
              onClick={limparIMC}
              className="w-[85%] h-15 bg-orange-600 rounded-2xl pl-2 text-xl font-bold hover:bg-orange-700 transition-colors duration-300"
            >
              C L E A N
            </button>
          </div>
          <div className="flex flex-col w-[55%] h-[45%] bg-gray-400 rounded-lg pl-5 justify-center gap-6 font-bold text-xl">
            <h1>Nome: {nome}</h1>
            <h1>Email: {email}</h1>
            <h1>Idade: {idade}</h1>
            <h1>Telefone: {telefone}</h1>
          </div>
        </div>
        <img src="/senaclogo.png" alt="IMC" className="w-35 h-20" />
      </section>
    </div>
  );
}
