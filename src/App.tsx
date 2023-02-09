import { useState } from "react";

import { Tasks } from "./components/Tasks";
import { Header } from "./components/Header";

import styles from "./App.module.css";

export interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

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
