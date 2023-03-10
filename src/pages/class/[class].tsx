import type { GetServerSideProps } from "next";
import WordsGame from "../../components/wordsGame/WordsGame";
import prisma from "../../utils/prisma";

interface Props {
  flashcards: Flashcard[];
  teacher: Teacher;
}

export default function Class({ flashcards, teacher }: Props): JSX.Element {
  if (!flashcards || !teacher) {
    return <div></div>;
  }
  return <WordsGame teacher={teacher} flashcards={flashcards}></WordsGame>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let class_id: string | undefined | number = Array.isArray(context.query.class)
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
