import Flashcard from "./Flashcard";

interface Props {
  flashcards: { image: string; name: string; audio: string }[];
  onClick: (answer: string) => void;
  answer: string | undefined;
}

export default function FlashcardsBoard(props: Props) {
  const flashcardsList = props.flashcards.map((flashcard, index) => {
    return (
      <Flashcard
        onClick={props.onClick}
        flashcard={flashcard}
        key={index}
        answer={props.answer}
      />
    );
  });

  return (
    <div className="m-auto flex flex-wrap justify-center pt-5 text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {flashcardsList}
    </div>
  );
}
