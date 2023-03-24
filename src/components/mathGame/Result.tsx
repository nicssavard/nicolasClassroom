interface Props {
  guess: number | null;
  isCorrect: boolean;
  isWrong: boolean;
}

export default function Result({ guess, isCorrect, isWrong }: Props) {
  return (
    <div
      data-testid={`result-${guess}`}
      className={`m-1 select-none rounded-lg bg-palette-500 p-1 shadow-2xl sm:p-2 ${
        isCorrect && "bg-green-500"
      } ${isWrong && "bg-red-500"}`}
    >
      <div>
        <div className="relative flex h-16 w-16 justify-center text-6xl text-gold-500 sm:h-32 sm:w-32 lg:h-40 lg:w-40 1080:h-64 1080:w-64">
          <div className="my-auto">{guess}</div>
        </div>
      </div>
    </div>
  );
}
