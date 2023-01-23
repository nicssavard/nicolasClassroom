import { GetServerSideProps } from "next";
import ListSubject from "../components/subjects/ListSubjects";
import prisma from "../utils/prisma";

interface Props {
  subjects: Subject[];
}

export default function Subjects(props: Props): JSX.Element {
  if (props.subjects) {
    return <ListSubject subjects={props.subjects}></ListSubject>;
  }
  return <div></div>;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const subjects = await prisma.subject.findMany();

  return {
    props: {
      subjects: subjects,
    },
  };
};
