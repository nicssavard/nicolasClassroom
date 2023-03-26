import Image from "next/image";
import { useState } from "react";

interface Props {
  flashcard: Flashcard;
  flashcardsSubject: number;
  addFlashcard: (flashcard: Flashcard) => void;
  removeFlashcard: (flashcard: Flashcard) => void;
}

export default function Flashcard(props: Props) {
  const [isSelected, setIsSelected] = useState(false);
  const onClickHandler = () => {
    if (isSelected) {
      props.removeFlashcard(props.flashcard);
      setIsSelected(false);
    } else {
      props.addFlashcard(props.flashcard);
      setIsSelected(true);
    }
  };
  return (
    <div
      onClick={onClickHandler}
      className={`${
        props.flashcard.subject_id === props.flashcardsSubject ? "" : "hidden"
      }
      ${
        isSelected ? "bg-palette-700" : "bg-palette-700 opacity-50"
      } m-2 cursor-pointer  rounded-lg p-1 shadow duration-300 hover:scale-105 sm:m-3 sm:p-2 xl:mx-3  1080:m-8`}
    >
      <div>
        <div className="relative h-20 w-20 sm:h-32 sm:w-32 lg:h-40 lg:w-40 1080:h-64 1080:w-64">
          <Image
            className="rounded-lg"
            src={`/flashcards/${props.flashcard.image}`}
            alt="Subject Image"
            fill={true}
          />
        </div>
        <div className="w-20 pt-1 text-lg text-gold-500 sm:w-32 sm:pt-2 sm:text-3xl lg:w-40 1080:w-64 1080:text-4xl">
          <h1>{props.flashcard.name}</h1>
        </div>
      </div>
    </div>
  );
}
