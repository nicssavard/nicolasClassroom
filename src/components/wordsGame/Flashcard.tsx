import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  flashcard: {
    image: string;
    name: string;
  };
  onClick: (answer: string) => void;
  key: number;
  answer: string | undefined;
  isMobile: boolean;
}

export default function Flashcard(props: Props) {
  const [display, setDisplay] = useState(true);
  const positionRef = useRef(null);
  useEffect(() => {
    const initialiseDisplay = () => {
      setDisplay(true);
    };

    initialiseDisplay();
  }, [props.answer]);

  const clickHandler = () => {
    if (props.answer !== props.flashcard.name) {
      //execute function after 1 second
      setTimeout(() => {
        setDisplay(false);
      }, 100);
    }
    props.onClick(props.flashcard.name);
  };

  //if (!display) return <div></div>;
  return (
    <motion.div ref={positionRef} className="m-2 sm:m-5 1080:mx-10">
      <motion.div
        drag
        dragConstraints={positionRef}
        dragElastic={1}
        whileTap={{ scale: 0.95 }}
        // onPanEnd={(event, info) => {
        onPanEnd={(event, info) => {
          if (props.isMobile) {
            clickHandler();
          }
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        // initial={{ scale: 0 }}
        // animate={{ scale: 1, transition: { duration: 1 } }}
        onClick={() => {
          //Make sure that the function is not executed on twice mobile devices

          clickHandler();
        }}
        className={`${
          !display && "opacity-40"
        } cursor-pointer rounded-lg bg-palette-700 p-1 shadow-2xl sm:p-2`}
      >
        <motion.div>
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 1080:h-64 1080:w-64">
            <Image
              draggable="false"
              className="rounded-lg"
              src={`/flashcards/${props.flashcard.image}`}
              alt="Flashcard Image"
              fill={true}
            />
          </div>
          <div className="w-32 pt-1 text-2xl text-gold-500  sm:w-40 sm:pt-2 sm:text-3xl 1080:w-64 1080:text-4xl">
            <h1>{props.flashcard.name}</h1>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
