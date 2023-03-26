import { render, fireEvent, screen } from "@testing-library/react";
import Letter from "../../../src/components/matchingGame/Letter";

test("renders Letter component and handles click event", () => {
  const selectHandler = jest.fn();

  render(
    <Letter letter="A" x={0} y={0} display="" selectHandler={selectHandler} />
  );

  fireEvent.click(screen.getByText("A"));
  expect(selectHandler).toHaveBeenCalledWith(0, 0);
});
