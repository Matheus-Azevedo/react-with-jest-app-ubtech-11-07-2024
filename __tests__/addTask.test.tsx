import { act, fireEvent, render, screen } from "@testing-library/react";
import AddTask from "../src/components/AddTask";

describe("Component AddTask", () => {
  it("Adiciona uma Tarefa", () => {
    const mockOnAddTask = jest.fn();
    act(() => {
      render(<AddTask onAddTask={mockOnAddTask} />);
    });
    fireEvent.change(screen.getByPlaceholderText(/adicionar nova tarefa/i), {
      target: { value: "Nova Tarefa" },
    });
    fireEvent.click(screen.getByText(/adicionar/i));
    expect(mockOnAddTask).toHaveBeenCalledWith("Nova Tarefa");
  });
});
