import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NumberBoard from "../../../src/components/mathGame/NumbersBoard";

describe("NumberBoard", () => {
  const guess = jest.fn();
  const maxNumber = 10;
  const answer = 5;
  const isMobile = false;

  beforeEach(() => {
    render(
      <NumberBoard
        guess={guess}
        maxNumber={maxNumber}
        answer={answer}
        isMobile={isMobile}
      />
    );
  });

  test("renders correct number of Number components", () => {
    const numberElements = screen.getAllByTestId("number-component");
    expect(numberElements.length).toBe(maxNumber);
  });

  test("renders the correct number in each Number component", () => {
    for (let i = 1; i <= maxNumber; i++) {
      const numberElement = screen.getByText(i.toString());
      expect(numberElement).toBeInTheDocument();
    }
  });
});
