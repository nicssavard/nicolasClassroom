import Teacher from "./Teacher";
import FlashcardsBoard from "./FlashcardsBoard";
import SuccessModal from "./SuccessModal";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/outline";

interface Props {
  teacher: Teacher;
  flashcards: Flashcard[];
}

export default function WordsGame(props: Props) {
  console.log(props.flashcards);
  const [question, setQuestion] = useState<any>(1);
  const [modalIsOpen, setModalIsOpen] = useState<any>();
  const [stars, setStars] = useState<any>(0);
  const isMobile = screen.width < 768;

  const successImage =
    props.teacher.success_image[
      Math.floor(Math.random() * props.teacher.success_image.length)
    ];
  useEffect(() => {
    const initialiseVar = () => {
      setQuestion(Math.floor(Math.random() * props.flashcards.length));
      setModalIsOpen(false);
    };
    initialiseVar();
  }, []);

  const askQuestion = () => {
    const audio = new Audio(`/flashcards/${props.flashcards[question]?.audio}`);
    audio.play();
  };

  const checkAnswer = (answer: string) => {
    const rightAnswer = answer === props.flashcards[question]?.name;
    if (rightAnswer) {
      correctAnswers();
      changeQuestion();
    } else {
      const audio = new Audio(
        `/flashcards/${props.flashcards[question]?.audio}`
      );
      setTimeout(() => {
        audio.play();
      }, 1000);
    }
  };

  const correctAnswers = () => {
    setModalIsOpen(true);
    setTimeout(() => {
      setModalIsOpen(false);
    }, 5000);
    if (stars < 10) {
      setStars(stars + 1);
    }
  };

  const changeQuestion = () => {
    let newQuestion = Math.floor(Math.random() * props.flashcards.length);
    while (question === newQuestion) {
      newQuestion = Math.floor(Math.random() * props.flashcards.length);
    }
    setQuestion(newQuestion);
  };

  const starsIcon = () => {
    let starss = [];
    for (let i = 0; i < stars; i++) {
      starss.push(
        <StarIcon className="mx-auto h-8 w-8 fill-yellow-500 sm:h-12 sm:w-12"></StarIcon>
      );
    }
    return starss;
  };

  const displayStars = starsIcon();

  if (question || question === 0) {
    return (
      <>
        {modalIsOpen && <SuccessModal image={successImage}></SuccessModal>}
        <div className="select-none pt-5">
          <div
            onClick={() => {
              if (!isMobile) {
                askQuestion();
              }
            }}
            onTouchStart={() => {
              if (isMobile) {
                askQuestion();
              }
            }}
            className="mx-auto w-fit"
          >
            <div className="flex-column fixed left-2 flex h-28 w-28 flex-wrap content-start items-start justify-start sm:h-40 sm:w-40">
              {displayStars}
            </div>
            <Teacher teacher={props.teacher}></Teacher>
          </div>
          <FlashcardsBoard
            onClick={checkAnswer}
            flashcards={props.flashcards}
            answer={props.flashcards[question]?.name}
            isMobile={isMobile}
          ></FlashcardsBoard>
        </div>
      </>
    );
  }

  return <div></div>;
}
