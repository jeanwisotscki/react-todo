import React from "react";

import styles from "./index.module.css";

import { Task } from "../../App";

interface Props {
  setTasksList: any;
}

export const Header = ({ setTasksList }: Props) => {
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

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>React ToDo</span>

        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleSubmit}>Criar</button>
        </div>
      </div>
    </header>
  );
};
