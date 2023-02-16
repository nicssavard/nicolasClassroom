interface Props {
  number: number;
  guess: (guess: number) => void;
}

export default function Number({ number, guess }: Props) {
  return (
    <div
      data-testid={`${number}`}
      className="m-1 rounded-lg bg-palette-700 p-1 shadow duration-300 hover:scale-105 hover:bg-palette-800 sm:p-2"
      onClick={() => guess(number)}
    >
      <div>
        <div className="relative flex h-16 w-16 justify-center text-6xl text-gold-500 sm:h-32 sm:w-32 lg:h-40 lg:w-40 1080:h-64 1080:w-64">
          <div className="my-auto">{number}</div>
        </div>
      </div>
    </div>
  );
}
