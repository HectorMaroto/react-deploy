/* eslint-disable react/prop-types */
import { useContext } from "react";
import TaskCard from "./TaskCard";
import { taskContext } from "../context/TaskContext";
function TaskList() {

  const { tasks } = useContext(taskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas por ahora</h1>;
  }

  return (
    <div className='flex flex-wrap justify-center gap-2 '>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
