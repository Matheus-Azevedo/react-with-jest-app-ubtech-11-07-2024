import { useState } from "react";
import styles from "../index.module.css";
import AddTask from "src/components/AddTask";
import TaskList from "src/components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleAddTask(task: string) {
    setTasks([...tasks, task]);
  }

  function handleRemoveTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to UBTech Experience 2024!</h1>
      <h2>Lista de Tarefas</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
    </div>
  );
}
