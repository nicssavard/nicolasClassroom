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
      }, 500);
    }
    props.onClick(props.flashcard.name);
  };

  if (!display) return <div></div>;
  return (
    <motion.div
      drag
      dragConstraints={positionRef}
      dragElastic={1}
      whileTap={{ scale: 0.95 }}
      onPanEnd={(event, info) => {
        console.log("pan");
        clickHandler();
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      initial={{ y: 500 }}
      animate={{ y: 0, transition: { duration: 1 } }}
      onClick={clickHandler}
      className={`m-2 cursor-pointer rounded-lg bg-green-dark p-2 shadow-2xl  sm:m-5 1080:mx-10`}
    >
      <motion.div ref={positionRef}>
        <div className="relative h-32 w-32 sm:h-40 sm:w-40 1080:h-64 1080:w-64">
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
      </motion.div>
    </motion.div>
  );
}
