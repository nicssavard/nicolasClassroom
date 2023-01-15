import Teacher from "../../components/wordsGame/Teacher";
import FlashcardsBoard from "../../components/wordsGame/FlashcardsBoard";
import { useRouter } from "next/router";
import { api } from "../../utils/api";

const askQuestion = () => {
  console.log("ask question");
};
const Class: React.FC = () => {
  const router = useRouter();
  //let className = router.query.class;
  const { data: teacher } = api.teachers.getOneTeacher.useQuery();

  return (
    <div className="pt-5 text-center">
      <div>
        {teacher && <Teacher onClick={askQuestion} teacher={teacher}></Teacher>}
        <FlashcardsBoard></FlashcardsBoard>
      </div>
    </div>
  );
};
export default Class;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const teacher = await getTeacher();
//   return { props: { teacher: teacher } };
// };
