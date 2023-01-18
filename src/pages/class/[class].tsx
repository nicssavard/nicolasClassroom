import { useRouter } from "next/router";
import WordsGame from "../../components/wordsGame/WordsGame";
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

  if (!flashcards || !teacher) {
    return <div></div>;
  }
  return (
    <div className="select-none pt-5">
      <WordsGame teacher={teacher} flashcards={flashcards}></WordsGame>
    </div>
  );
};
export default Class;
