import { BsTrash, BsCheckLg } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";

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

  const handleToggleCompleted = (task: Task) => {
    console.log(task);
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
          <span className={styles.purple}>Tarefas criadas: </span>
          <span>{tasksList.length}</span>
        </div>
        <div>
          <span className={styles.blue}>Concluídas: </span>
          <span>
            {completedTasks} de {tasksList.length}
          </span>
        </div>
      </div>
      <div className={styles.tasksContainer}>
        {tasksList &&
          tasksList.map((task) => (
            <div key={task.id} className={styles.task}>
              <button
                onClick={() => handleToggleCompleted(task)}
                className={styles.checkButton}
              >
                {task.isCompleted ? (
                  <BsCheckLg size={20} />
                ) : (
                  <ImCheckboxUnchecked size={20} />
                )}
              </button>

              <p>{task.content}</p>
              <button onClick={() => handleDelete(task.id)}>
                <BsTrash size={20} />
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
