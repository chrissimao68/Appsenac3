import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-mist-800 font-sans w-screen h-screen flex items-center justify-center">
      <section className=" w-[40%] h-[75%] bg-gray-300 rounded-2xl flex flex-col items-center justify-center gap-5">
        <div className="bg-white w-[95%] h-20 flex items-center gap-2 pl-4 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
            />
          </svg>
          <div>
            <h1 className="text-3xl font-bold">Minhas Tarefas</h1>
            <p className="text-xs">Gerencie suas tarefas de forma simples</p>
          </div>
        </div>
        <div className="bg-white w-[95%] h-100 flex flex-col gap-4 rounded-2xl">
          <h1 className="flex pl-5 pt-4 pb-4 text-xl font-bold">Nova Tarefa</h1>
          <div className="flex flex-col justify-center pl-5 gap-1">
            <p>Tarefa</p>
            <input
              className="w-[95%] h-9 bg-gray-100 outline-none rounded-md pl-2"
              type="text"
              placeholder="Descreva sua tarefa..."
            />
          </div>
          <div className="flex w-[95%]  justify-between">
            <div className="flex flex-col justify-center pl-5 gap-1  w-full">
              <p>Data</p>
              <input
                className="w-full h-9 bg-gray-100 outline-none rounded-md pl-2 pr-2"
                type="date"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div className="flex flex-col justify-center pl-5 gap-1 w-full">
              <p>Horário</p>
              <input
                className="w-full h-9 bg-gray-100 outline-none rounded-md pl-2 pr-2"
                type="time"
                placeholder="hh:mm"
              />
            </div>
          </div>
          <select
            name="estados"
            className="px-4 w-full py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             hover:border-gray-400 transition duration-200 cursor-pointer"
          >
            <option value="pendente">Pendente</option>
            <option value="andamento">Em andamento</option>
            <option value="concluído">Concluído</option>
          </select>
          <button className="w-40 h-9 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors mt-4 flex justify-center items-center gap-4 duration-300 ml-5">
            <p>+</p>
            <p>Adicionar</p>
          </button>
        </div>
        <div className="bg-white w-[95%] h-35 rounded-2xl">
          <h1 className="flex pl-5 pt-4 pb-4 text-xl font-bold">
            Tarefas Cadastradas
          </h1>
        </div>
      </section>
    </div>
  );
}
