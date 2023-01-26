import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Props {
  flashcard: Flashcard;
  key: number;
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
        isSelected ? "bg-green-light" : "bg-green-dark"
      } m-2 cursor-pointer  rounded-lg p-2 shadow duration-300 hover:scale-105 sm:m-5 sm:p-3 xl:mx-10`}
    >
      <div>
        <div className="relative h-32 w-32 sm:h-56 sm:w-56 1080:h-64 1080:w-64">
          <Image
            className="rounded-lg"
            src={`/flashcards/${props.flashcard.image}`}
            alt="Subject Image"
            fill={true}
          />
        </div>
        <div className="pt-2 text-3xl text-gold-500 sm:pt-3 1080:text-4xl">
          <h1>{props.flashcard.name}</h1>
        </div>
      </div>
    </div>
  );
}
