/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { taskContext } from '../context/TaskContext'
import { useContext } from 'react'


export default function TaskCard({task}) {

  // Obtener elementos del contexto 'taskContext' para evitar el 'prop drilling'
  const {deleteTask} = useContext(taskContext)

  return (
      <>
        <div className='bg-gray-800 w-72 text-white p-4 rounded-md' key={task.id}>
          <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
          <p className='text-gray-400 text-sm'>{task.description}</p>
          <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={()=>deleteTask(task.id)}>Eliminar</button>
        </div>
      </>
  )
}
