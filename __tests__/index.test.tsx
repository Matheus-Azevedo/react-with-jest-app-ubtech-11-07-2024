import { render, screen } from "@testing-library/react";
import Home from "../src/pages/home/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Welcome to UBTech Experience 2024!/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it("Renderiza um botão Adicionar", () => {
    render(<Home />);
    const button = screen.getByRole("button", {
      name: /Adicionar/i,
    });
    expect(button).toBeInTheDocument();
  });
});
