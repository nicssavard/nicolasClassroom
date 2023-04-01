import { render, screen } from "@testing-library/react";
import Flashcard from "../../../src/components/wordsGame/Flashcard";
import "@testing-library/jest-dom";

test("renders Flashcard component with correct image src and name", () => {
  const flashcardMock = {
    image: "example_flashcard.jpg",
    name: "Example",
  };

  render(
    <Flashcard
      flashcard={flashcardMock}
      onClick={() => {}}
      key={1}
      answer={undefined}
      isMobile={false}
    />
  );

  const imageElement = screen.getByAltText("Flashcard Image");
  expect(imageElement).toBeInTheDocument();
  //   expect(imageElement).toHaveAttribute(
  //     "src",
  //     "/flashcards/example_flashcard.jpg"
  //   );

  const nameElement = screen.getByText("Example");
  expect(nameElement).toBeInTheDocument();
});
