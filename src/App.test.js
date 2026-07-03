import { render, screen } from "@testing-library/react";
import App from "./App";
import { greeting } from "./portfolio";

test("renders greeting title", () => {
  render(<App />);
  const titleElement = screen.getByText(greeting.title);
  expect(titleElement).toBeInTheDocument();
});
