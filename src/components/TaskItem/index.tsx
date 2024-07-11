import React from "react";

interface TaskItemProps {
  task: string;
  onRemoveTask: () => void;
}

function TaskItem({ task, onRemoveTask }: TaskItemProps) {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onRemoveTask}>Remover</button>
    </div>
  );
}
export default TaskItem;
