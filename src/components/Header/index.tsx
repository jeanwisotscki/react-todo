import { useTask } from "./useTask";

import styles from "./index.module.css";

interface Props {
  setTasksList: any;
}

export const Header = ({ setTasksList }: Props) => {
  const { handleChange, handleSubmit, task } = useTask(setTasksList);

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
            onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : null)}
          />
          <button onClick={handleSubmit}>Criar</button>
        </div>
      </div>
    </header>
  );
};
