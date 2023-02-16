import Game from "./Game";

interface Props {
  games: Game[];
}

export default function ListGames({ games }: Props) {
  const gamesList = games.map((game, index) => {
    return <Game game={game} key={index} />;
  });

  return (
    <div className="m-auto flex flex-wrap justify-center  text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {gamesList}
    </div>
  );
}
