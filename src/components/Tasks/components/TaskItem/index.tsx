import { TbTrash } from "react-icons/tb";
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./index.module.css";

import { Task } from "../../../../shared/interfaces";

interface ITaskItemProps {
  task: Task;
  handleDelete: (taskId: string) => void;
  handleToggleCompleted: (taskId: string) => void;
}

export const TaskItem = ({
  task,
  handleToggleCompleted,
  handleDelete,
}: ITaskItemProps) => {
  return (
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
  );
};
