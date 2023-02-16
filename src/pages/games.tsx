import ListGames from "../components/games/ListGames";
import prisma from "../utils/prisma";

interface Props {
  games: Game[];
}

export default function Games({ games }: Props): JSX.Element {
  if (games) {
    return <ListGames games={games}></ListGames>;
  }
  return <div></div>;
}
export async function getStaticProps() {
  const games = await prisma.game.findMany();

  return {
    props: {
      games: games,
    },
  };
}
