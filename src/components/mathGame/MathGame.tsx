import { useState, useEffect, useCallback } from "react";
import NumberBoard from "./NumbersBoard";
import Operand from "./Operand";
import Result from "./Result";
import Student from "../wordsGame/Student";
import useStore from "../../store/userStore";
import { api } from "../../utils/api";

export default function MathGame() {
  const user = useStore((state) => state.user);
  const addOne: any = api.users.addOnePoint.useMutation();
  const [student, setStudent] = useState<User | undefined>();

  const minAnswer = 1;
  const maxAnswer = 10;
  const [answer, setAnswer] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [guess, setGuess] = useState<number | null>(null);
  const [operator, setOperator] = useState("+");
  const isMobile = screen.width < 768;
  //check if device is touch screen
  const generateQuestion = useCallback(() => {
    let tempAnswer = -1;
    let tempFirstNumber = 0;
    let tempSecondNumber = 0;
    let tempOperator = "+";
    while (tempAnswer < minAnswer || tempAnswer > maxAnswer) {
      tempFirstNumber = Math.floor(Math.random() * 10) + 1;
      tempSecondNumber = Math.floor(Math.random() * 10) + 1;
      tempOperator = Math.floor(Math.random() * 2) === 0 ? "+" : "-";
      tempAnswer =
        tempOperator === "+"
          ? tempFirstNumber + tempSecondNumber
          : tempFirstNumber - tempSecondNumber;
    }
    setFirstNumber(tempFirstNumber);
    setSecondNumber(tempSecondNumber);
    setOperator(tempOperator);
    setAnswer(tempAnswer);
  }, []);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const changeStudent = (student: User | undefined) => {
    setStudent(student);
  };

  const checkAnswer = (guess: number) => {
    setGuess(guess);
    if (answer === guess) {
      setIsCorrect(true);
      if (student?.username) {
        addOne.mutate({ username: student.username });
      } else if (user?.username) {
        addOne.mutate({ username: user.username });
      }
      setTimeout(() => {
        setIsCorrect(false);
        setGuess(null);
        generateQuestion();
      }, 2000);
    } else {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
        setGuess(null);
      }, 2000);
    }
  };

  return (
    <div>
      <Student changeStudent={changeStudent}></Student>
      <div className="align-center flex flex-row content-center justify-center">
        <Operand number={firstNumber} />
        <div className="my-auto text-5xl">{operator}</div>
        <Operand number={secondNumber} />
        <div className="my-auto text-5xl">=</div>
        <Result isCorrect={isCorrect} isWrong={isWrong} guess={guess} />
      </div>
      <NumberBoard
        maxNumber={10}
        guess={checkAnswer}
        answer={answer}
        isMobile={isMobile}
      />
    </div>
  );
}
