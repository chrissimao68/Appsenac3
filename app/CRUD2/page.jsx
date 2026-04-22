"use client";
import { useState } from "react";

export default function Home() {
  const [alunos, setAlunos] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [curso, setCurso] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  function limparCampos() {
    setNome("");
    setEmail("");
    setCelular("");
    setCurso("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novoAluno = { nome, email, celular, curso };

    if (editIndex !== null) {
      const novosAlunos = [...alunos];
      novosAlunos[editIndex] = novoAluno;
      setAlunos(novosAlunos);
      setEditIndex(null);
    } else {
      setAlunos([...alunos, novoAluno]);
    }

    limparCampos();
  }

  function handleEdit(index) {
    const aluno = alunos[index];
    setNome(aluno.nome);
    setEmail(aluno.email);
    setCelular(aluno.celular);
    setCurso(aluno.curso);
    setEditIndex(index);
  }

  function handleDelete(index) {
    const novosAlunos = [];

    // recria a lista sem o que deve ser excluido
    for (let i = 0; i < alunos.length; i++) {
      if (i !== index) novosAlunos.push(alunos[i]);
    }

    // atualiza a lista de alunos
    setAlunos(novosAlunos);
  }

  return (
    <div className="bg-gray-800 font-sans w-screen min-h-screen flex items-center justify-center">
      <section className="w-[50%] bg-gray-300 rounded-2xl flex flex-col items-center gap-5 p-4">
        <div className="bg-black w-full h-23 flex flex-col items-center gap-2 rounded-xl justify-center">
          <h1 className="text-2xl font-bold text-white">
            Cadastro de Alunos Senac Competição
          </h1>
          <p className="text-xs text-orange-600 font-bold italic">
            Etapa Escolar Lavras - MG
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-black w-full h-50 flex flex-col gap-6 px-2 rounded-xl items-center justify-center "
        >
          <div className="flex w-full gap-2 text-gray-500">
            <input
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              className="w-full h-9 bg-gray-100 outline-none rounded px-2"
              type="text"
              placeholder="Nome Completo..."
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full h-9 bg-gray-100 outline-none rounded px-2"
              type="email"
              placeholder="E-mail..."
              required
            />
          </div>

          <div className="flex w-full gap-2">
            <input
              onChange={(e) => setCelular(e.target.value)}
              value={celular}
              className="w-full h-9 bg-gray-100 outline-none rounded px-2"
              type="tel"
              placeholder="(xx) xxxxx-xxxx"
              required
            />
            <input
              onChange={(e) => setCurso(e.target.value)}
              value={curso}
              className="w-full h-9 bg-gray-100 outline-none rounded px-2"
              type="text"
              placeholder="Curso..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-9 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
          >
            {editIndex !== null ? "Atualizar" : "+ Adicionar"}
          </button>
        </form>

        {/* TABELA */}
        <div className="bg-black w-full rounded-xl text-white ">
          <table className="w-full text-left ">
            <thead>
              <tr className="bg-gray-300 text-gray-800 font-bold ">
                <th className="py-2 px-4 border text-center  ">Nome</th>
                <th className="py-2 px-4 border text-center ">E-mail</th>
                <th className="py-2 px-4 border text-center">Telefone</th>
                <th className="py-2 px-4 border text-center">Curso</th>
                <th className="py-2 px-4 border text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{aluno.nome}</td>
                  <td className="py-2 px-4 border">{aluno.email}</td>
                  <td className="py-2 px-4 border">{aluno.celular}</td>
                  <td className="py-2 px-4 border">{aluno.curso}</td>
                  <td className="py-2 px-4 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
