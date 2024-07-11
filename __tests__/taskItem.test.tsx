import { act, fireEvent, render, screen } from "@testing-library/react";
import TaskItem from "../src/components/TaskItem";

describe("Component TaskItem", () => {
  it("Renderiza e remove uma tarefa", () => {
    const task = "Tarefa 1";
    const mockOnRemoveTask = jest.fn();
    act(() => {
      render(<TaskItem task={task} onRemoveTask={mockOnRemoveTask} />);
    });
    expect(screen.getByText(task)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/remover/i));
    expect(mockOnRemoveTask).toHaveBeenCalled();
  });
});
