import Teacher from "./Teacher";
import FlashcardsBoard from "./FlashcardsBoard";
import SuccessModal from "./SuccessModal";
import Student from "./Student";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import useStore from "../../store/userStore";
import { api } from "../../utils/api";

interface Props {
  teacher: Teacher;
  flashcards: Flashcard[];
  students: User[];
}

export default function WordsGame({ flashcards, teacher, students }: Props) {
  const user = useStore((state) => state.user);
  const addOne: any = api.users.addOnePoint.useMutation();

  const [correctAnswersAmount, setCorrectAnswersAmount] = useState<number>(0);
  const [student, setStudent] = useState<User | undefined>();
  const [question, setQuestion] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean | undefined>();
  let audioIsPlaying = false;
  const isMobile = screen.width < 768;
  const successImage =
    teacher.success_image[
      Math.floor(Math.random() * teacher.success_image.length)
    ];
  useEffect(() => {
    const initialiseVar = () => {
      setQuestion(Math.floor(Math.random() * flashcards.length));
      setModalIsOpen(false);
    };
    initialiseVar();
  }, [flashcards.length]);

  const pickStudent = () => {
    if (students.length === 1) {
      setStudent(students[0]);
    } else {
      if (students[0]) {
        let newStudent = students[Math.floor(Math.random() * students.length)];
        while (student === newStudent) {
          newStudent = students[Math.floor(Math.random() * students.length)];
        }

        if (newStudent) {
          setStudent(newStudent);
        }
      }
    }
  };

  const audio: HTMLAudioElement = new Audio(
    `/flashcards/${flashcards[question]?.audio}`
  );

  const askQuestion = () => {
    if (!audioIsPlaying) {
      audioIsPlaying = true;
      audio.play();
      setTimeout(() => {
        audioIsPlaying = false;
      }, audio.duration * 1000 + 1000);
    }
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
    }, 5000);
    if (correctAnswersAmount < 9) {
      setCorrectAnswersAmount(correctAnswersAmount + 1);
    }
  };

  const changeQuestion = () => {
    if (flashcards.length === 1) {
      setQuestion(0);
      return;
    }
    let newQuestion = Math.floor(Math.random() * flashcards.length);
    while (question === newQuestion) {
      newQuestion = Math.floor(Math.random() * flashcards.length);
    }
    setQuestion(newQuestion);
  };

  const starsIcon = () => {
    const starsList = [];
    for (let i = 0; i < correctAnswersAmount; i++) {
      starsList.push(
        <StarIcon
          key={i}
          className="mx-auto h-8 w-8 fill-yellow-500 sm:h-12 sm:w-12"
        ></StarIcon>
      );
    }
    return starsList;
  };

  const displayStars = starsIcon();

  if (question || question === 0) {
    return (
      <>
        {modalIsOpen && <SuccessModal image={successImage}></SuccessModal>}
        <div className="select-none pt-5">
          <div className="mx-auto w-fit">
            <div className="flex-column fixed left-2 flex h-28 w-28 flex-wrap content-start items-start justify-start sm:h-40 sm:w-40">
              {displayStars}
            </div>
            {user?.is_admin && (
              <Student student={student} pickStudent={pickStudent}></Student>
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
