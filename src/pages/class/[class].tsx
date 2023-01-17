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
    return <div>Loading</div>;
  }
  return (
    <div className="select-none pt-5">
      <WordsGame teacher={teacher} flashcards={flashcards}></WordsGame>
    </div>
  );
};
export default Class;

// import Teacher from "../../components/wordsGame/Teacher";
// import FlashcardsBoard from "../../components/wordsGame/FlashcardsBoard";
// import { useRouter } from "next/router";
// import { api } from "../../utils/api";
// import SuccessModal from "../../components/wordsGame/SuccessModal";
// import { useState } from "react";

// const Class: React.FC = () => {
//   const router = useRouter();
//   let className = router.query.class;
//   const { data: teacher } = api.teachers.getOneTeacher.useQuery();
//   if (!className) {
//     className = "";
//   }
//   const { data: flashcards } = api.flashcards.getFlashcardsByClass.useQuery({
//     class: className,
//   });

//   let modalIsOpen = false;
//   //const [modalIsOpen, setModalIsOpen] = useState(false);

//   if (flashcards) {
//     var questiona = Math.floor(Math.random() * flashcards.length);
//     // const [question, setQuestion] = useState(
//     //   Math.floor(Math.random() * flashcards.length)
//     // );
//     //setQuestion(Math.floor(Math.random() * flashcards.length));
//   } else {
//     var questiona = 0;
//   }

//   const [question, setQuestion] = useState(questiona);

//   //let question: number = 0;
//   //const [question, setQuestion] = useState(0);

//   // const askQuestion = () => {
//   //   if (flashcards) {
//   //     const audio = new Audio(`/flashcards/${flashcards[question]?.audio}`);
//   //     audio.play();
//   //   }
//   // };

//   const checkAnswer = (answer: string) => {
//     if (flashcards) {
//       const rightAnswer = answer === flashcards[question]?.name;
//       if (rightAnswer) {
//         correctAnswers();
//         changeQuestion();
//       } else {
//         alert("Wrong!");
//       }
//     }
//   };

//   const correctAnswers = () => {
//     modalIsOpen = true;
//   };
//   const changeQuestion = () => {
//     console.log("old question: " + question);
//     if (flashcards) {
//       let newQuestion = Math.floor(Math.random() * flashcards.length);
//       while (question === newQuestion) {
//         newQuestion = Math.floor(Math.random() * flashcards.length);
//       }
//       console.log("new question: " + newQuestion);
//       setQuestion(newQuestion);
//     }
//   };
//   if (!flashcards || !teacher) {
//     return <div>Loading</div>;
//   }
//   return (
//     <>
//       {/* {modalIsOpen && (
//         <SuccessModal  modalIsOpen={modalIsOpen} image={flashcards[question]?.image}></SuccessModal>
//       )} */}
//       <div className="pt-5 text-center">
//         <div>
//           <Teacher
//             question={flashcards[question]?.audio}
//             teacher={teacher}
//             modalIsOpen={modalIsOpen}
//             successImage={flashcards[question]?.image}
//           ></Teacher>
//           <FlashcardsBoard
//             onClick={checkAnswer}
//             flashcards={flashcards}
//           ></FlashcardsBoard>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Class;
