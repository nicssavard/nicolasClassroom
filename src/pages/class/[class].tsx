import Teacher from "../../components/wordsGame/Teacher";
import FlashcardsBoard from "../../components/wordsGame/FlashcardsBoard";
import { useRouter } from "next/router";
import { api } from "../../utils/api";

const Class: React.FC = () => {
  const router = useRouter();
  let className = router.query.class;
  const { data: teacher } = api.teachers.getOneTeacher.useQuery();
  if (!className) {
    className = "";
  }
  const { data: flashcards } = api.flashcards.getFlashcardsByClass.useQuery({
    class: className,
  });
  let question: number;
  if (flashcards) {
    question = Math.floor(Math.random() * flashcards.length);
  }

  const askQuestion = () => {
    if (flashcards) {
      const audio = new Audio(`/flashcards/${flashcards[question]?.audio}`);
      audio.play();
    }
  };

  const checkAnswer = (answer: string) => {
    if (flashcards) {
      if (answer === flashcards[question]?.name) {
        alert("Correct!");
        let newQuestion = Math.floor(Math.random() * flashcards.length);
        while (question === newQuestion) {
          newQuestion = Math.floor(Math.random() * flashcards.length);
        }
        question = newQuestion;
      } else {
        alert("Wrong!");
      }
    }
  };

  return (
    <div className="pt-5 text-center">
      <div>
        {teacher && <Teacher onClick={askQuestion} teacher={teacher}></Teacher>}
        {flashcards && (
          <FlashcardsBoard
            onClick={checkAnswer}
            flashcards={flashcards}
          ></FlashcardsBoard>
        )}
      </div>
    </div>
  );
};
export default Class;
