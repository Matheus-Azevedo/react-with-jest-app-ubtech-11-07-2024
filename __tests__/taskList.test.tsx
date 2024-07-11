import { act, fireEvent, render, screen } from "@testing-library/react";
import TaskList from "../src/components/TaskList";

describe("Component TaskList", () => {
  it("Remove uma Tarefa", () => {
    const tasks = ["Tarefa 1, Tarefa 2, Tarefa 3"];
    const mockOnRemoveTask = jest.fn();
    act(() => {
      render(<TaskList tasks={tasks} onRemoveTask={mockOnRemoveTask} />);
    });
    fireEvent.click(screen.getAllByText(/remover/i)[0]);
    expect(mockOnRemoveTask).toHaveBeenCalledWith(0);
  });
});
