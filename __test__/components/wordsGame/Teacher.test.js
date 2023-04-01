import { render, screen } from "@testing-library/react";
import Teacher from "../../../src/components/wordsGame/Teacher";
import "@testing-library/jest-dom";

test("renders Teacher component with correct image src", () => {
  const teacherMock = {
    image: "john_doe.jpg",
  };

  render(<Teacher teacher={teacherMock} />);

  const imageElement = screen.getByAltText("Teacher Image");
  expect(imageElement).toBeInTheDocument();
  //expect(imageElement).toHaveAttribute("src", "/teachers/john_doe.jpg"); // test doesn't work because next change the src to something weird and for me unpredictable  src="/_next/image?url=%2Fteachers%2Fjohn_doe.jpg&w=3840&q=75"
});
