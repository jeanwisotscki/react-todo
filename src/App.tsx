import { useState } from "react";

import { Task } from "./shared/interfaces";
import { Tasks } from "./components/Tasks";
import { Header } from "./components/Header";

import styles from "./App.module.css";

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  return (
    <div className={styles.app}>
      <Header setTasksList={setTasksList} />
      <Tasks tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
}

export default App;
