import Number from "./Number";

interface Props {
  guess: (guess: number) => void;
  maxNumber: number;
}

export default function NumberBoard({ guess, maxNumber }: Props) {
  let numbers = [];

  for (let i = 1; i <= maxNumber; i++) {
    numbers.push(<Number guess={guess} key={i} number={i} />);
  }
  return (
    <div className="m-auto flex flex-wrap justify-center pt-5 text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {numbers}
    </div>
  );
}
