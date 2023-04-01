import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Flashcard {
  image: string;
  name: string;
}

interface Props {
  flashcard: Flashcard;
  onClick: (answer: string) => void;
  key: number;
  answer: string | undefined;
  isMobile: boolean;
}

export default function Flashcard({
  flashcard,
  onClick,
  answer,
  isMobile,
}: Props) {
  const [display, setDisplay] = useState(true);
  const positionRef = useRef(null);

  useEffect(() => {
    setDisplay(true);
  }, [answer]);

  const clickHandler = () => {
    if (answer !== flashcard.name) {
      setTimeout(() => {
        setDisplay(false);
      }, 100);
    }
    onClick(flashcard.name);
  };

  return (
    <motion.div ref={positionRef} className="m-2 sm:m-5 1080:mx-10">
      <motion.div
        drag
        dragConstraints={positionRef}
        dragElastic={1}
        whileTap={{ scale: 0.95 }}
        onPanEnd={(event, info) => {
          if (isMobile) {
            clickHandler();
          }
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        onClick={clickHandler}
        className={`${
          !display && "opacity-40"
        } cursor-pointer rounded-lg bg-palette-700 p-1 shadow-2xl sm:p-2`}
      >
        <motion.div>
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 1080:h-64 1080:w-64">
            <Image
              draggable="false"
              className="rounded-lg"
              src={`/flashcards/${flashcard.image}`}
              alt="Flashcard Image"
              fill={true}
            />
          </div>
          <div className="w-32 pt-1 text-2xl text-gold-500 sm:w-40 sm:pt-2 sm:text-3xl 1080:w-64 1080:text-4xl">
            <h1>{flashcard.name}</h1>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
