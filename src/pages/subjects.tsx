import ListSubject from "../components/subjects/ListSubjects";
import prisma from "../utils/prisma";
import LoadingPage from "../components/LoadingPage";

interface Props {
  subjects: Subject[];
}

export default function Subjects({ subjects }: Props): JSX.Element {
  return subjects ? (
    <ListSubject subjects={subjects}></ListSubject>
  ) : (
    <LoadingPage />
  );
}
export async function getStaticProps() {
  const subjects = await prisma.subject.findMany();

  return {
    props: {
      subjects: subjects,
    },
  };
}
