import { GetServerSideProps } from "next";
import WordsGame from "../../components/wordsGame/WordsGame";
import { api } from "../../utils/api";
import prisma from "../../utils/prisma";
import useStore from "../../store/userStore";

interface Props {
  flashcards: Flashcard[];
  teacher: Teacher;
}

export default function Class({ flashcards, teacher }: Props): JSX.Element {
  const group = useStore((state) => state.group);
  const { data: students } = api.users.getUsersByGroup.useQuery({
    group_id: group.id,
  });

  if (!flashcards || !teacher || !students) {
    return <div></div>;
  }
  return (
    <WordsGame
      students={students}
      teacher={teacher}
      flashcards={flashcards}
    ></WordsGame>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // if (!context.query.class) {
  //   return {
  //     notFound: true,
  //   };
  // }
  let class_id: any = Array.isArray(context.query.class)
    ? context.query.class[0]
    : context.query.class;
  if (class_id) {
    class_id = parseInt(class_id);
  }
  const flashcards = await prisma.flashcard.findMany({
    where: { class_id: class_id },
  });
  const teacher = await prisma.teacher.findFirst();

  return {
    props: {
      teacher: teacher,
      flashcards: flashcards,
    },
  };
};
