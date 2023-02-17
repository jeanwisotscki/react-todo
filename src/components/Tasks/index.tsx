import styles from "./index.module.css";

import { useTasks } from "./hooks/useTasks";

import { TaskItem } from "./components/TaskItem";
import { TasksHeader } from "./components/TasksHeader";

import { Task } from "../../shared/interfaces";

interface Props {
  tasksList: Task[];
  setTasksList: any;
}

export const Tasks = ({ tasksList, setTasksList }: Props) => {
  const { handleDelete, completedTasks, handleToggleCompleted } = useTasks({
    tasksList,
    setTasksList,
  });

  return (
    <section className={styles.container}>
      <TasksHeader
        tasksListLength={tasksList.length}
        completedTasksValue={completedTasks}
      />
      <div className={styles.tasksContainer}>
        {tasksList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleToggleCompleted={handleToggleCompleted}
          />
        ))}

        {!tasksList.length && (
          <div className={styles.empty}>
            <h1>Lista vazia. 🤷</h1>
          </div>
        )}
      </div>
    </section>
  );
};
