import styles from "./index.module.css";

interface ITasksHeaderProps {
  completedTasksValue: number;
  tasksListLength: number;
}

export const TasksHeader = ({
  tasksListLength,
  completedTasksValue,
}: ITasksHeaderProps) => {
  return (
    <div className={styles.tasksHeader}>
      <div>
        <span>Tarefas criadas: </span>
        <strong>{tasksListLength}</strong>
      </div>
      <div>
        <span>Concluídas: </span>
        <strong>
          {completedTasksValue} de {tasksListLength}
        </strong>
      </div>
    </div>
  );
};
