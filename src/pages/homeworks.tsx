import ListHomeworks from "../components/homeworks/ListHomework";
import prisma from "../utils/prisma";
import LoadingPage from "../components/LoadingPage";

interface Props {
  homeworks: Homework[];
}

export default function Homeworks({ homeworks }: Props): JSX.Element {
  return homeworks ? (
    <ListHomeworks homeworks={homeworks}></ListHomeworks>
  ) : (
    <LoadingPage />
  );
}

export async function getStaticProps() {
  const homeworks = await prisma.homework.findMany();

  return {
    props: {
      homeworks: homeworks,
    },
  };
}
