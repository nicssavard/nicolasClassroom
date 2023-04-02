import { useState } from "react";
import prisma from "../utils/prisma";
import Image from "next/image";

interface Props {
  flashcards: Flashcard[];
  subjects: Subject[];
}

export default function Flashcards({
  flashcards,
  subjects,
}: Props): JSX.Element {
  const [flashcardsSubject, setFlashcardsSubject] = useState<number>(1);
  const audio: HTMLAudioElement = new Audio();

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

  const playAudio = (flashcard: Flashcard) => {
    audio.src = `/flashcards/${flashcard.audio}`;
    audio.play();
  };

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
        playAudio={playAudio}
        flashcards={flashcards}
      ></ListFlashcards>
    </>
  );
}

export async function getStaticProps() {
  const flashcards = await prisma.flashcard.findMany();
  const subjects = await prisma.subject.findMany();

  return {
    props: {
      flashcards: flashcards,
      subjects: subjects,
    },
  };
}

interface ListFlashcardProps {
  flashcards: Flashcard[];
  flashcardsSubject: number;
  playAudio: (flashcard: Flashcard) => void;
}

function ListFlashcards(props: ListFlashcardProps) {
  const flashcardList = props.flashcards.map((flashcard) => {
    return (
      <Flashcard
        flashcardsSubject={props.flashcardsSubject}
        playAudio={props.playAudio}
        flashcard={flashcard}
        key={flashcard.id}
      />
    );
  });
  return (
    <div className="m-auto flex flex-wrap justify-center pt-5 text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {flashcardList}
    </div>
  );
}

interface FlashcardProps {
  flashcard: Flashcard;
  flashcardsSubject: number;
  playAudio: (flashcard: Flashcard) => void;
}

function Flashcard(props: FlashcardProps) {
  return (
    <div
      onClick={() => {
        props.playAudio(props.flashcard);
      }}
      className={`${
        props.flashcard.subject_id === props.flashcardsSubject ? "" : "hidden"
      }
      m-2 cursor-pointer rounded-lg  bg-palette-700 p-1 shadow duration-300 hover:scale-105 sm:m-3 sm:p-2 xl:mx-3  1080:m-8`}
    >
      <div>
        <div className="relative h-20 w-20 sm:h-32 sm:w-32 lg:h-40 lg:w-40 1080:h-64 1080:w-64">
          <Image
            className="rounded-lg"
            src={`/flashcards/${props.flashcard.image}`}
            alt="Subject Image"
            fill={true}
          />
        </div>
        <div className="w-20 pt-1 text-lg text-gold-500 sm:w-32 sm:pt-2 sm:text-3xl lg:w-40 1080:w-64 1080:text-4xl">
          <h1>{props.flashcard.name}</h1>
        </div>
      </div>
    </div>
  );
}
