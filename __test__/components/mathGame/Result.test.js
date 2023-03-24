import { render, screen } from "@testing-library/react";
import Result from "../../../src/components/mathGame/Result";
import "@testing-library/jest-dom";

test("renders Result component with correct guess and style", () => {
  const props = {
    guess: 5,
    isCorrect: true,
    isWrong: false,
  };

  render(<Result {...props} />);
  const resultElement = screen.getByTestId(`result-${props.guess}`);
  expect(resultElement).toHaveTextContent(`${props.guess}`);
  expect(resultElement).toHaveClass("bg-green-500");
});

test("renders Result component with incorrect guess and style", () => {
  const props = {
    guess: 3,
    isCorrect: false,
    isWrong: true,
  };

  render(<Result {...props} />);
  const resultElement = screen.getByTestId(`result-${props.guess}`);
  expect(resultElement).toHaveTextContent(`${props.guess}`);
  expect(resultElement).toHaveClass("bg-red-500");
});
