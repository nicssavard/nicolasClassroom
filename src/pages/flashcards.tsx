import ListFlashcards from "../components/flashcards/ListFlashcards";
import WordsGame from "../components/wordsGame/WordsGame";
import { useState } from "react";
import { api } from "../utils/api";
import { GetServerSideProps } from "next";
import prisma from "../utils/prisma";

interface Props {
  flashcards: Flashcard[];
  teacher: Teacher;
}

export default function Flashcards({
  flashcards,
  teacher,
}: Props): JSX.Element {
  const [game, setGame] = useState(false);
  const [flashcardsList, setFlashcardslist] = useState<Flashcard[]>([]);

  const addFlashcard = (flashcard: Flashcard) => {
    setFlashcardslist([...flashcardsList, flashcard]);
  };

  const removeFlashcard = (flashcard: Flashcard) => {
    setFlashcardslist(flashcardsList.filter((f) => f !== flashcard));
  };
  if (game && teacher) {
    return (
      <WordsGame teacher={teacher} flashcards={flashcardsList}></WordsGame>
    );
  }
  if (flashcards) {
    return (
      <>
        <div>Select flashcards to review</div>
        <ListFlashcards
          addFlashcard={addFlashcard}
          removeFlashcard={removeFlashcard}
          flashcards={flashcards}
        ></ListFlashcards>
        <div className="pt-5">
          <button
            className="rounded-full bg-green-dark py-2 px-4 text-4xl font-bold text-gold-500 hover:bg-green-light"
            onClick={() => {
              setGame(true);
            }}
          >
            Start Game
          </button>
        </div>
      </>
    );
  }
  return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const flashcards = await prisma.flashcard.findMany({
    where: { subject_name: "Words" },
  });
  const teacher = await prisma.teacher.findFirst();
  return {
    props: {
      flashcards: flashcards,
      teacher: teacher,
    },
  };
};
