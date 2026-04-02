"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function calcularIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");

  function calcularIMC() {
    if (!peso || !altura) {
      setResultado("Por favor, preencha ambos os campos.");
      return;
    }
    const imc = peso / (altura * altura);
    setResultado(imc.toFixed(2));

    console.log(imc);
    if (imc < 1.85) setClassificacao("Abaixo do Peso");
    else if (imc < 25) setClassificacao("Peso Normal");
    else if (imc < 30) setClassificacao("Sobrepeso");
    else setClassificacao("Obesidade");
  }

  function limparIMC() {
    setPeso("");
    setAltura("");
    setResultado(null);
    setClassificacao("");
  }

  return (
    <div className="flex flex-col  items-center justify-center bg-gray-300 font-sans w-screen h-screen font-lato">
      <section className="w-[50%] h-[80%] flex flex-col items-center justify-center gap-10 bg-black rounded-xl shadow-xl pt-7 pb-7">
        <h1 className="text-5xl text-orange-500">Calculadora de IMC</h1>
        <div className="flex flex-col w-[60%] h-[70%] bg-gray-400 rounded-lg items-center justify-center gap-6">
          <input
            className="w-[85%] h-15 bg-gray-200 rounded-2xl pl-2 outline-none pr-2"
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Peso (kg) Ex: '70'"
          />
          <input
            className="w-[85%] h-15 bg-gray-200 rounded-2xl pl-2 outline-none pr-2"
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Altura (m) Ex: '1.70'"
          />
          <button
            onClick={calcularIMC}
            className="w-[85%] h-15 bg-blue-700 rounded-2xl pl-2 text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
          >
            Calcular IMC
          </button>
          <button
            onClick={limparIMC}
            className="w-[85%] h-15 bg-orange-600 rounded-2xl pl-2 text-xl font-bold hover:bg-orange-700 transition-colors duration-300"
          >
            C L E A N
          </button>
          <p className="text-xl font-bold text-white"> IMC: {resultado}</p>
          <p className="text-xl font-bold text-white">
            Classificação: {classificacao}
          </p>
        </div>
        <img src="/senaclogo.png" alt="IMC" className="w-35 h-20" />
      </section>
    </div>
  );
}
