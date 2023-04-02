import ListGames from "../components/games/ListGames";
import prisma from "../utils/prisma";
import LoadingPage from "../components/LoadingPage";

interface Props {
  games: Game[];
}

export default function Games({ games }: Props): JSX.Element {
  return games ? <ListGames games={games}></ListGames> : <LoadingPage />;
}

export async function getStaticProps() {
  const games = await prisma.game.findMany();

  return {
    props: {
      games: games,
    },
  };
}
