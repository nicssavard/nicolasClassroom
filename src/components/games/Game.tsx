import Link from "next/link";
import Image from "next/image";

interface Props {
  game: Game;
}

export default function Game({ game }: Props) {
  return (
    <Link className="m-2 sm:m-5 xl:mx-10" href={`/games/${game.name}`}>
      <div className="rounded-lg bg-palette-700 p-2 shadow duration-300 hover:scale-105 hover:bg-palette-800 sm:p-3">
        <div>
          <div className="relative h-32 w-32 sm:h-56 sm:w-56 1080:h-64 1080:w-64">
            <Image
              className="rounded-lg"
              src={`/games/${game.image}`}
              alt="Game Image"
              fill={true}
            />
          </div>
          <div className="pt-2 text-3xl text-gold-500 sm:pt-3 1080:text-4xl">
            <h1>{game.name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
