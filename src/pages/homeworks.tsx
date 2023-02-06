import ListHomeworks from "../components/homeworks/ListHomework";
import prisma from "../utils/prisma";

interface Props {
  homeworks: Homework[];
}

export default function Homeworks({ homeworks }: Props): JSX.Element {
  if (homeworks) {
    return <ListHomeworks homeworks={homeworks}></ListHomeworks>;
  }
  return <div></div>;
}
export async function getStaticProps() {
  const homeworks = await prisma.homework.findMany();

  return {
    props: {
      homeworks: homeworks,
    },
  };
}
