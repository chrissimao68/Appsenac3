"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function CRUD() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [telefone, setTelefone] = useState("");
    const [alunos, setAlunos] = useState([]);

    const cadastrarAluno = () => {
        if (!nome || !email || !idade || !telefone) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const novoAluno = { nome, email, idade, telefone };
        
        const novalista = alunos.slice();
        novalista.push(novoAluno);
        setAlunos(novalista);
        limparDados();
    }

    function limparDados() {
      setNome("");
      setEmail("");
      setIdade("");
      setTelefone("");
      
    }


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
        </div>
      </section>
      <section className="h-[80%] w-[83%] flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col w-[55%] h-full bg-gray-400 rounded-lg items-center justify-center gap-4 pt-5">
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
            type="number"
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
          <button
            onClick={cadastrarAluno}
            className="w-[85%] h-15 bg-blue-700 rounded-2xl pl-2 text-xl font-bold hover:bg-blue-800 transition-colors duration-300"
          >
            Enviar Dados
          </button>
          <button
            onClick={limparDados}
            className="w-[85%] h-15 bg-orange-600 rounded-2xl pl-2 text-xl font-bold hover:bg-orange-700 transition-colors duration-300"
          >
            C L E A N
          </button>
          <div className="flex flex-col w-[55%] h-[45%] bg-gray-400 rounded-lg pl-5 justify-center gap-6 font-bold text-xl">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Idade</th>
                  <th>Telefone</th>
                </tr>
                <button className="bg-blue-700 text-white py-2 px-4 rounded">
                  Cadastrar Aluno
                </button>
                <button className="bg-blue-700 text-white py-2 px-4 rounded">
                  Limpar
                </button>
              </thead>
              <tbody>
                {alunos.map((aluno, index) => (
                  <tr key={index}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.email}</td>
                    <td>{aluno.idade}</td>
                    <td>{aluno.telefone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
