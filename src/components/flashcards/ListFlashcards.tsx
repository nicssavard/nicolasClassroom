import Flashcard from "./Flashcard";

interface Props {
  flashcards: Flashcard[];
  addFlashcard: (flashcard: Flashcard) => void;
  removeFlashcard: (flashcard: Flashcard) => void;
}

export default function ListFlashcards(props: Props) {
  const flashcardList = props.flashcards.map((flashcard, index) => {
    return (
      <Flashcard
        addFlashcard={props.addFlashcard}
        removeFlashcard={props.removeFlashcard}
        flashcard={flashcard}
        key={index}
      />
    );
  });
  return (
    <div className="m-auto flex flex-wrap justify-center pt-5 text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {flashcardList}
    </div>
  );
}
