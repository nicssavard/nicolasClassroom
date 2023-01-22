import ListFlashcards from "../components/flashcards/ListFlashcards";
import WordsGame from "../components/wordsGame/WordsGame";
import { useState } from "react";
import { api } from "../utils/api";

export default function Flashcards() {
  const [game, setGame] = useState(false);
  const { data: flashcards } = api.flashcards.getFlashcardsBySubject.useQuery({
    subject: "Words",
  });
  const { data: teacher } = api.teachers.getOneTeacher.useQuery();
  const [flashcardsList, setFlashcardslist] = useState<Flashcard[]>([]);

  const addFlashcard = (flashcard: Flashcard) => {
    setFlashcardslist([...flashcardsList, flashcard]);
    console.log(flashcardsList);
  };

  const removeFlashcard = (flashcard: Flashcard) => {
    setFlashcardslist(flashcardsList.filter((f) => f !== flashcard));
    console.log(flashcardsList);
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
