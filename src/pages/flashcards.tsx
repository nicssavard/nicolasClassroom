import ListFlashcards from "../components/flashcards/ListFlashcards";
import WordsGame from "../components/wordsGame/WordsGame";
import { useState } from "react";
import prisma from "../utils/prisma";

interface Props {
  flashcards: Flashcard[];
  teacher: Teacher;
  subjects: Subject[];
}

export default function Flashcards({
  flashcards,
  teacher,
  subjects,
}: Props): JSX.Element {
  const [game, setGame] = useState(false);
  const [flashcardsList, setFlashcardslist] = useState<Flashcard[]>([]);

  const [flashcardsSubject, setFlashcardsSubject] = useState<number>(1);
  const subjectsList = subjects.map((subject: Subject) => {
    return (
      <option key={subject.id} value={subject.id}>
        {subject.name}
      </option>
    );
  });

  const subjectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subjectId = parseInt(e.target.value);
    setFlashcardsSubject(subjectId);
  };

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
        <div className="mt-4 flex flex-row justify-center">
          <select
            className="rounded-xl p-1"
            onChange={subjectHandler}
            name="subject"
            id="subject"
          >
            {subjectsList}
          </select>
        </div>

        <ListFlashcards
          flashcardsSubject={flashcardsSubject}
          addFlashcard={addFlashcard}
          removeFlashcard={removeFlashcard}
          flashcards={flashcards}
        ></ListFlashcards>
        <div className="pt-5">
          <button
            className="m-4 rounded-full bg-palette-700 py-2 px-4 text-4xl font-bold text-gold-500 hover:bg-green-light"
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

export async function getStaticProps() {
  const flashcards = await prisma.flashcard.findMany();
  const teacher = await prisma.teacher.findFirst();
  const subjects = await prisma.subject.findMany();

  return {
    props: {
      flashcards: flashcards,
      teacher: teacher,
      subjects: subjects,
    },
  };
}
