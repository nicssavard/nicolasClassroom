import renderer from "react-test-renderer";
import Number from "../../../src/components/mathGame/Number";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// test("renders a number", () => {
//   const component = renderer.create(<Number number={1} />);
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

test("id", () => {
  const number = 1;
  render(<Number number={number} />);
  expect(screen.getByTestId(`${number}`)).toHaveTextContent(`${number}`);
});
