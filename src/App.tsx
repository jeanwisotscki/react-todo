import { useState } from "react";

import { Tasks } from "./components/Tasks";
import { Header } from "./components/Header";

export interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  return (
    <>
      <Header setTasksList={setTasksList} />
      <Tasks tasksList={tasksList} setTasksList={setTasksList} />
    </>
  );
}

export default App;
