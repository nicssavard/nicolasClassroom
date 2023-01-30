import ListFlashcards from "../components/flashcards/ListFlashcards";
import WordsGame from "../components/wordsGame/WordsGame";
import { useState } from "react";
import useStore from "../store/userStore";
import { GetServerSideProps } from "next";
import prisma from "../utils/prisma";
import { api } from "../utils/api";

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
  const group = useStore((state) => state.group);
  const { data: students } = api.users.getUsersByGroup.useQuery({
    group_id: group.id,
  });
  const [game, setGame] = useState(false);
  const [flashcardsList, setFlashcardslist] = useState<Flashcard[]>([]);
  const [flashcardsDisplayed, setFlashcardsDisplayed] =
    useState<Flashcard[]>(flashcards);

  //const [subject, setSubject] = useState<any>(subjects[0].name || "");

  const subjectsList = subjects.map((subject: Subject) => {
    return (
      <option key={subject.id} value={subject.name}>
        {subject.name}
      </option>
    );
  });

  const subjectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  const addFlashcard = (flashcard: Flashcard) => {
    setFlashcardslist([...flashcardsList, flashcard]);
  };

  const removeFlashcard = (flashcard: Flashcard) => {
    setFlashcardslist(flashcardsList.filter((f) => f !== flashcard));
  };
  if (game && teacher && students) {
    return (
      <WordsGame
        students={students}
        teacher={teacher}
        flashcards={flashcardsList}
      ></WordsGame>
    );
  }
  if (flashcards) {
    return (
      <>
        <div className="flex flex-row justify-center">
          <div>Select flashcards to review</div>
          <select onChange={subjectHandler} name="subject" id="subject">
            {subjectsList}
          </select>
        </div>

        <ListFlashcards
          addFlashcard={addFlashcard}
          removeFlashcard={removeFlashcard}
          flashcards={flashcardsDisplayed}
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
};
