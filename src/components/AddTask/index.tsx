import React, { useState } from "react";

export interface AddTaskProps {
  onAddTask: (task: string) => void;
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [task, setTask] = useState("");

  function handleSubmit() {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}
export default AddTask;
