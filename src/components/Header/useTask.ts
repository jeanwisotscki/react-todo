import React from "react";

import { Task } from "../../shared/interfaces";

export const useTask = (setTasksList: any) => {
  const [task, setTask] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    const newTask = {
      id: crypto.randomUUID(),
      content: task,
      isCompleted: false,
    };

    setTasksList((prevValues: Task[]) => [...prevValues, newTask]);
    setTask("");
  };

  return {
    task,
    handleChange,
    handleSubmit,
  };
};
