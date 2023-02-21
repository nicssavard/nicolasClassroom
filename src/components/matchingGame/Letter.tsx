import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Props {
  letter: string;
  isDisplayed?: boolean;
  x: number;
  y: number;
  display: string;
  selectHandler: (x: number, y: number) => void;
}

export default function Letter({
  letter,
  isDisplayed = true,
  selectHandler,
  x,
  y,
  display,
}: Props) {
  //const [display, setDisplay] = useState(isDisplayed);
  const positionRef = useRef(null);
  //   useEffect(() => {
  //     const initialiseDisplay = () => {
  //       setDisplay(true);
  //     };

  //     initialiseDisplay();
  //   }, []);

  const clickHandler = () => {
    if (x !== 1 && display != "success" && display != "hidden") {
      selectHandler(x, y);
    }
  };
  console.log(display);
  return (
    <div
      onClick={clickHandler}
      className={`${display === "hidden" && "opacity-0"} ${
        display === "selected" && "bg-palette-dark"
      } ${display === "failure" && "bg-red-500"} ${
        display === "success" && "bg-green-500"
      } m-1 cursor-pointer select-none rounded-lg bg-palette-700 p-1 shadow sm:p-2`}
      data-testid={`${letter}`}
    >
      <div>
        <div className="relative flex h-20 w-20 justify-center text-6xl text-gold-500  1080:h-28 1080:w-28 1440:h-48 1440:w-48">
          <div className="my-auto">{letter}</div>
        </div>
      </div>
    </div>
  );
}
