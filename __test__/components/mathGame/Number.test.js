import Number from "../../../src/components/mathGame/Number";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test("renders Number component with correct id and text content", () => {
  const number = 1;
  const guessMock = jest.fn();
  const props = {
    number: number,
    guess: guessMock,
    answer: 2,
    isMobile: false,
  };

  render(<Number {...props} />);
  expect(screen.getByTestId(`${number}`)).toHaveTextContent(`${number}`);
});

test("calls guess function on click", () => {
  const guessMock = jest.fn();
  const props = {
    number: 3,
    guess: guessMock,
    answer: 5,
    isMobile: false,
  };

  render(<Number {...props} />);
  fireEvent.click(screen.getByTestId("3"));

  expect(guessMock).toHaveBeenCalledWith(3);
});
