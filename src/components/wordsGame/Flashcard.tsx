import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  flashcard: {
    image: string;
    name: string;
  };
  onClick: (answer: string) => void;
  key: number;
  answer: string | undefined;
}

export default function Flashcard(props: Props) {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const initialiseDisplay = () => {
      setDisplay(true);
    };

    initialiseDisplay();
  }, [props.answer]);

  const clickHandler = () => {
    if (props.answer !== props.flashcard.name) {
      setDisplay(false);
    }
    props.onClick(props.flashcard.name);
  };

  return (
    <div
      onClick={clickHandler}
      className={`${
        !display && "hidden"
      } m-2 cursor-pointer rounded-lg bg-green-dark p-2 shadow duration-300 hover:scale-105 hover:bg-green-light sm:m-5 sm:p-3 1080:mx-10`}
    >
      <div>
        <div className="relative h-32 w-32 sm:h-48 sm:w-48 1080:h-64 1080:w-64">
          <Image
            draggable="false"
            className="rounded-lg"
            src={`/flashcards/${props.flashcard.image}`}
            alt="Flashcard Image"
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
