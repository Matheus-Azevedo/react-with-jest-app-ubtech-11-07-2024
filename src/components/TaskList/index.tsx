import React from "react";
import TaskItem from "../TaskItem";

interface TaskListProps {
  tasks: string[];
  onRemoveTask: (index: number) => void;
}

function TaskList({ tasks, onRemoveTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <TaskItem task={task} onRemoveTask={() => onRemoveTask(index)} />
        </li>
      ))}
    </ul>
  );
}
export default TaskList;
