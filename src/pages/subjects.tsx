import ListSubject from "../components/subjects/ListSubjects";
import prisma from "../utils/prisma";

interface Props {
  subjects: Subject[];
}

export default function Subjects({ subjects }: Props): JSX.Element {
  if (subjects) {
    return <ListSubject subjects={subjects}></ListSubject>;
  }
  return <div></div>;
}
export async function getStaticProps() {
  const subjects = await prisma.subject.findMany();

  return {
    props: {
      subjects: subjects,
    },
  };
}
