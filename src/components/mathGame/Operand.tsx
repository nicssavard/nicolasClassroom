interface Props {
  number: number;
}

export default function Operand({ number }: Props) {
  return (
    <div
      data-testid={`operand-${number}`}
      className="m-1 select-none rounded-lg bg-palette-800 p-1 shadow sm:p-2"
    >
      <div>
        <div className="relative flex h-16 w-16 justify-center text-6xl text-gold-500 sm:h-32 sm:w-32 lg:h-40 lg:w-40 1080:h-64 1080:w-64">
          <div className="my-auto">{number}</div>
        </div>
      </div>
    </div>
  );
}
