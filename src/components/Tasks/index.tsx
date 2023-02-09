import { TbTrash } from "react-icons/tb";
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./index.module.css";

import { Task } from "../../App";

interface Props {
  tasksList: Task[];
  setTasksList: any;
}

const useTasks = ({ tasksList, setTasksList }: Props) => {
  const handleDelete = (id: string) => {
    const newList = tasksList.filter((task) => task.id !== id);

    setTasksList(newList);
  };

  const handleToggleCompleted = (id: string) => {
    const newList = tasksList.map((task) => {
      if (task.id === id)
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };

      return task;
    });

    return setTasksList(newList);
  };

  const completedTasks = tasksList.filter((task) => task.isCompleted).length;

  return {
    handleDelete,
    completedTasks,
    handleToggleCompleted,
  };
};

export const Tasks = ({ tasksList, setTasksList }: Props) => {
  const { handleDelete, completedTasks, handleToggleCompleted } = useTasks({
    tasksList,
    setTasksList,
  });

  return (
    <section className={styles.container}>
      <div className={styles.tasksHeader}>
        <div>
          <span>Tarefas criadas: </span>
          <strong>{tasksList.length}</strong>
        </div>
        <div>
          <span>Concluídas: </span>
          <strong>
            {completedTasks} de {tasksList.length}
          </strong>
        </div>
      </div>
      <div className={styles.tasksContainer}>
        {tasksList &&
          tasksList.map((task) => (
            <div key={task.id} className={styles.task}>
              <button
                onClick={() => handleToggleCompleted(task.id)}
                className={styles.checkButton}
              >
                {task.isCompleted ? (
                  <BsFillCheckCircleFill size={20} />
                ) : (
                  <BsCircle size={20} />
                )}
              </button>

              <p
                className={task.isCompleted ? styles.isCompleted : ""}
                onClick={() => handleToggleCompleted(task.id)}
              >
                {task.content}
              </p>
              <button onClick={() => handleDelete(task.id)}>
                <TbTrash size={20} />
              </button>
            </div>
          ))}
        {tasksList.length === 0 && (
          <div className={styles.empty}>
            <h1>Lista vazia. 🤷</h1>
          </div>
        )}
      </div>
    </section>
  );
};
