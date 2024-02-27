/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const taskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      {/* {props.children} La propiedad children indica los componentes que irán dentro de este contexto */}
      <taskContext.Provider
        value={{
          tasks,
          createTask,
          deleteTask,
        }}
      >
        {props.children}
      </taskContext.Provider>
    </>
  );
}
