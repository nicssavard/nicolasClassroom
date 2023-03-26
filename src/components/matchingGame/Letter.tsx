import { useRef } from "react";

interface Props {
  letter: string;
  isDisplayed?: boolean;
  x: number;
  y: number;
  display: string;
  selectHandler: (x: number, y: number) => void;
}

function getDisplayClass(display: string): string {
  switch (display) {
    case "hidden":
      return "opacity-0";
    case "selected":
      return "bg-palette-dark";
    case "failure":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    default:
      return "";
  }
}

export default function Letter({
  letter,
  isDisplayed = true,
  selectHandler,
  x,
  y,
  display,
}: Props) {
  const positionRef = useRef(null);

  const clickHandler = () => {
    if (x !== 1 && display !== "success" && display !== "hidden") {
      selectHandler(x, y);
    }
  };

  const displayClass = getDisplayClass(display);

  return (
    <div
      onClick={clickHandler}
      className={`${
        displayClass ? displayClass + " " : ""
      }m-1 cursor-pointer select-none rounded-lg bg-palette-700 p-1 shadow sm:p-2`}
      data-testid={`${letter}`}
    >
      <div className="relative flex h-20 w-20 justify-center text-6xl text-gold-500 1080:h-28 1080:w-28 1440:h-48 1440:w-48">
        <div className="my-auto">{letter}</div>
      </div>
    </div>
  );
}
