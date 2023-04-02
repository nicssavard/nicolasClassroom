import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import useStore from "../../store/userStore";
import { api } from "../../utils/api";
import SuccessModal from "./SuccessModal";
import Teacher from "./Teacher";
import FlashcardsBoard from "./FlashcardsBoard";
import Student from "./Student";

interface Props {
  teacher: Teacher;
  flashcards: Flashcard[];
}

export default function WordsGame({ flashcards, teacher }: Props) {
  const user = useStore((state) => state.user);
  const addOne = api.users.addOnePoint.useMutation();

  const [correctAnswersAmount, setCorrectAnswersAmount] = useState<number>(0);
  const [student, setStudent] = useState<User | undefined>();
  const [question, setQuestion] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [successImage, setSuccessImage] = useState<string | undefined>("");

  useEffect(() => {
    setQuestion(Math.floor(Math.random() * flashcards.length));
    setModalIsOpen(false);
    setSuccessImage(
      teacher.success_image[
        Math.floor(Math.random() * teacher.success_image.length)
      ]
    );
  }, [flashcards, teacher]);

  const changeStudent = (student: User | undefined) => {
    setStudent(student);
  };

  const audio: HTMLAudioElement = new Audio(
    `/flashcards/${flashcards[question]?.audio}`
  );

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const askQuestion = () => {
    if (!audio.paused) return;
    audio.play();
  };

  const checkAnswer = (answer: string) => {
    const rightAnswer = answer === flashcards[question]?.name;
    if (rightAnswer) {
      correctAnswers();
      changeQuestion();
    } else {
      askQuestion();
    }
  };

  const correctAnswers = () => {
    if (student?.username) {
      addOne.mutate({ username: student.username });
    } else if (user?.username) {
      addOne.mutate({ username: user.username });
    }
    setModalIsOpen(true);
    setTimeout(() => {
      setModalIsOpen(false);
      setSuccessImage(
        teacher.success_image[
          Math.floor(Math.random() * teacher.success_image.length)
        ]
      );
    }, 5000);
    if (correctAnswersAmount < 9) {
      setCorrectAnswersAmount(correctAnswersAmount + 1);
    }
  };

  const changeQuestion = () => {
    let newQuestion = 0;
    do {
      newQuestion = Math.floor(Math.random() * flashcards.length);
    } while (question === newQuestion);
    setQuestion(newQuestion);
  };

  const displayStars = Array(correctAnswersAmount)
    .fill(null)
    .map((_, i) => (
      <StarIcon
        key={i}
        className="mx-auto h-8 w-8 fill-yellow-500 sm:h-12 sm:w-12"
      ></StarIcon>
    ));

  const isMobile = window.innerWidth < 768;

  if (question || question === 0) {
    return (
      <>
        <SuccessModal
          image={successImage}
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        ></SuccessModal>

        <div className="select-none pt-5">
          <div className="mx-auto w-fit">
            <div className="flex-column fixed left-2 flex h-28 w-28 flex-wrap content-start items-start justify-start sm:h-40 sm:w-40">
              {displayStars}
            </div>
            {user?.is_admin && (
              <Student changeStudent={changeStudent}></Student>
            )}
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
            >
              <Teacher teacher={teacher}></Teacher>
            </div>
          </div>
          <FlashcardsBoard
            onClick={checkAnswer}
            flashcards={flashcards}
            answer={flashcards[question]?.name}
            isMobile={isMobile}
          ></FlashcardsBoard>
        </div>
      </>
    );
  }

  return <div></div>;
}
