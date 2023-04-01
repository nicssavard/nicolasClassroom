import Flashcard from "./Flashcard";

interface FlashcardData {
  image: string;
  name: string;
  audio: string;
}

interface Props {
  flashcards: FlashcardData[];
  onClick: (answer: string) => void;
  answer: string | undefined;
  isMobile: boolean;
}

export default function FlashcardsBoard({
  flashcards,
  onClick,
  answer,
  isMobile,
}: Props) {
  const flashcardsList = flashcards.map((flashcard, index) => (
    <Flashcard
      onClick={onClick}
      flashcard={flashcard}
      key={index}
      answer={answer}
      isMobile={isMobile}
    />
  ));

  return (
    <div className="m-auto flex flex-wrap justify-center text-center xl:w-5/6 1080:w-4/6 1080:pt-5 1440:w-2/3">
      {flashcardsList}
    </div>
  );
}
