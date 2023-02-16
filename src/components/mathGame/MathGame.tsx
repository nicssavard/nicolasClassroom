import { useState } from "react";
import NumberBoard from "./NumbersBoard";

export default function MathGame() {
  const minAnswer = 1;
  const maxAnswer = 10;
  const [answer, setAnswer] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [operator, setOperator] = useState("+");

  const generateQuestion = () => {
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
    // const firstNumber = Math.floor(Math.random() * 10) + 1;
    // const secondNumber = Math.floor(Math.random() * 10) + 1;
    // const operator = Math.floor(Math.random() * 2) === 0 ? "+" : "-";
    console.log(tempFirstNumber, tempOperator, tempSecondNumber, tempAnswer);
    setFirstNumber(tempFirstNumber);
    setSecondNumber(tempSecondNumber);
    setOperator(tempOperator);
    setAnswer(tempAnswer);
  };

  const checkAnswer = (guess: number) => {
    if (answer === guess) {
      generateQuestion();
    }
  };
  return (
    <div>
      <div>
        {firstNumber} {operator} {secondNumber}
      </div>
      <button onClick={generateQuestion}>{answer}</button>
      <NumberBoard maxNumber={10} guess={checkAnswer} />
    </div>
  );
}
