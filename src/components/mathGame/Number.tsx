import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Props {
  number: number;
  guess: (guess: number) => void;
  answer: number;
  isMobile: boolean;
}

export default function Number({ number, guess, answer, isMobile }: Props) {
  const [display, setDisplay] = useState(true);
  const positionRef = useRef(null);

  useEffect(() => {
    setDisplay(true);
  }, [answer]);

  const handleIncorrectGuess = () => {
    setTimeout(() => {
      setDisplay(false);
    }, 100);
  };

  const handleGuess = () => {
    if (answer !== number) {
      handleIncorrectGuess();
    }
    guess(number);
  };

  return (
    <motion.div
      ref={positionRef}
      className="m-1"
      data-testid="number-component"
    >
      <motion.div
        drag
        dragConstraints={positionRef}
        dragElastic={1}
        whileTap={{ scale: 0.95 }}
        onPanEnd={() => {
          if (isMobile) {
            handleGuess();
          }
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        onClick={handleGuess}
        className={`${
          !display && "opacity-40"
        } cursor-pointer select-none rounded-lg bg-palette-700 p-1 shadow sm:p-2`}
        data-testid={`${number}`}
      >
        <div className="relative flex h-16 w-16 justify-center text-6xl text-gold-500 sm:h-32 sm:w-32 lg:h-40 lg:w-40 1080:h-64 1080:w-64">
          <div className="my-auto">{number}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
