"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function fichaAluno() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [soma, setSoma] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularSoma() {
    const soma = parseFloat(a) + parseFloat(b) + parseFloat(c);
    setResultado(soma.toFixed(2));
  }
  function limparIMC() {
    setA("");
    setB("");
    setC("");

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
              type="Number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="Valor de A"
            />
            <input
              className="w-[85%] h-15 bg-gray-200 rounded-2xl pl-2 outline-none pr-2"
              type="Number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="Valor de B"
            />
            <input
              className="w-[85%] h-15 bg-gray-200 rounded-2xl pl-2 outline-none pr-2"
              type="Number"
              value={c}
              onChange={(e) => setC(e.target.value)}
              placeholder="Valor de C"
            />

            <button
              onClick={calcularSoma}
              className="w-[85%] h-15 bg-blue-700 rounded-2xl pl-2 text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
            >
              S O M A R
            </button>
            <button
              onClick={limparIMC}
              className="w-[85%] h-15 bg-orange-600 rounded-2xl pl-2 text-xl font-extrabold hover:bg-orange-700 transition-colors duration-300"
            >
              C L E A N
            </button>
          </div>
          <div className="flex flex-col w-[55%] h-[45%] bg-gray-400 rounded-lg pl-5 justify-center gap-6 font-bold text-xl">
            <h1>resultado: {resultado}</h1>
          </div>
        </div>
        <img src="/senaclogo.png" alt="IMC" className="w-35 h-20" />
      </section>
    </div>
  );
}
