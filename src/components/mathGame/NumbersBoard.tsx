import Number from "./Number";

interface Props {
  guess: (guess: number) => void;
  maxNumber: number;
  answer: number;
  isMobile: boolean;
}

export default function NumberBoard({
  guess,
  maxNumber,
  answer,
  isMobile,
}: Props) {
  const numbers = [];

  for (let i = 1; i <= maxNumber; i++) {
    numbers.push(
      <Number
        isMobile={isMobile}
        guess={guess}
        key={i}
        number={i}
        answer={answer}
      />
    );
  }
  return (
    <div className="m-auto flex flex-wrap justify-center pt-5 text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {numbers}
    </div>
  );
}
