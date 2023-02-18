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
    const initialiseDisplay = () => {
      setDisplay(true);
    };

    initialiseDisplay();
  }, [answer]);

  const clickHandler = () => {
    if (answer !== number) {
      //execute function after 1 second
      setTimeout(() => {
        setDisplay(false);
      }, 100);
    }
    guess(number);
  };

  return (
    <motion.div ref={positionRef} className="m-1 ">
      <motion.div
        drag
        dragConstraints={positionRef}
        dragElastic={1}
        whileTap={{ scale: 0.95 }}
        // onPanEnd={(event, info) => {
        onPanEnd={(event, info) => {
          if (isMobile) {
            clickHandler();
          }
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        // initial={{ scale: 0 }}
        // animate={{ scale: 1, transition: { duration: 1 } }}
        onClick={() => {
          //Make sure that the function is not executed on twice mobile(touch) devices
          clickHandler();
        }}
        className={`${
          !display && "opacity-40"
        }  cursor-pointer select-none rounded-lg bg-palette-700  p-1 shadow sm:p-2`}
        data-testid={`${number}`}
      >
        <div>
          <div className="relative flex h-16 w-16 justify-center text-6xl text-gold-500 sm:h-32 sm:w-32 lg:h-40 lg:w-40 1080:h-64 1080:w-64">
            <div className="my-auto">{number}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
