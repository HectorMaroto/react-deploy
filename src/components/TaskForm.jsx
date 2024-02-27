/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { taskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { createTask } = useContext(taskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description: desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className='bg-slate-300 p-3 w-full mb-2'
          value={title}
          autoFocus
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className='bg-slate-300 p-3 w-full mb-2'
          value={desc}
          placeholder="Describe la tarea"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}
