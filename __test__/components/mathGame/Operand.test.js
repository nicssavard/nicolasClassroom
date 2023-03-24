import { render, screen } from "@testing-library/react";
import Operand from "../../../src/components/mathGame/Operand";
import "@testing-library/jest-dom";

test("renders Operand component with correct number", () => {
  const number = 5;
  render(<Operand number={number} />);
  expect(screen.getByTestId(`operand-${number}`)).toHaveTextContent(
    `${number}`
  );
});
