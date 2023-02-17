import { Task } from "../../../shared/interfaces";

interface Props {
  tasksList: Task[];
  setTasksList: any;
}

export const useTasks = ({ tasksList, setTasksList }: Props) => {
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
