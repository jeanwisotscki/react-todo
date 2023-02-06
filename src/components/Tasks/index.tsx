import React from "react";

import styles from "./index.module.css";

import { Task } from "../../App";

interface Props {
  tasksList: Task[];
  setTasksList: any;
}

export const Tasks = ({ tasksList, setTasksList }: Props) => {
  const completedTasks = tasksList.filter((task) => task.isCompleted).length;

  const handleDelete = (id: string) => {
    const newList = tasksList.filter((task) => task.id !== id);

    setTasksList(newList);
  };

  return (
    <section className={styles.container}>
      <div className={styles.tasksHeader}>
        <span>Tarefas criadas: {tasksList.length}</span>
        <span>
          Concluídas: {completedTasks} de {tasksList.length}
        </span>
      </div>
      <div className={styles.tasksContainer}>
        {tasksList.length &&
          tasksList.map((task) => (
            <div key={task.id} className={styles.task}>
              <button>check</button>
              <p>{task.content}</p>
              <button onClick={() => handleDelete(task.id)}>delete</button>
            </div>
          ))}
      </div>
    </section>
  );
};
