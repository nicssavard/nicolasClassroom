import Flashcard from "./Flashcard";

interface Props {
  flashcards: { image: string; name: string; audio: string }[];
  onClick: (answer: string) => void;
  answer: string | undefined;
  isMobile: boolean;
}

export default function FlashcardsBoard(props: Props) {
  const flashcardsList = props.flashcards.map((flashcard, index) => {
    return (
      <Flashcard
        onClick={props.onClick}
        flashcard={flashcard}
        key={index}
        answer={props.answer}
        isMobile={props.isMobile}
      />
    );
  });

  return (
    <div className="m-auto flex flex-wrap justify-center text-center  xl:w-5/6 1080:w-4/6 1080:pt-5 1440:w-2/3">
      {flashcardsList}
    </div>
  );
}
