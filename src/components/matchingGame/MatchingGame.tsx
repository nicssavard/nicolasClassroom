import { useState, useEffect } from "react";
import Letter from "./Letter";

const LETTERS_COUNT = 5;

const getRandomLetters = (array: string[], length: number) => {
  const randomLetters: any = [];
  while (randomLetters.length < length) {
    const randomNumber = Math.floor(Math.random() * array.length);
    if (!randomLetters.includes(array[randomNumber])) {
      randomLetters.push(array[randomNumber]);
    }
  }
  return randomLetters;
};

export default function MatchingGame() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const initializer = [
    new Array(LETTERS_COUNT).fill(""),
    new Array(LETTERS_COUNT).fill("hidden"),
    new Array(LETTERS_COUNT).fill(""),
  ];
  const [selectedLetter, setSelectedLetter] = useState<[number, number] | null>(
    null
  );
  const [currentLetters, setCurrentLetters] = useState<any>([]);
  const [currentLettersDisplay, setCurrentLettersDisplay] =
    useState<any>(initializer);
  console.log(currentLettersDisplay);

  const selectHandler = (x: number, y: number) => {
    const newDisplay = [...currentLettersDisplay];
    if (!selectedLetter) {
      newDisplay[x][y] = "selected";
      setSelectedLetter([x, y]);
    } else {
      if (selectedLetter[0] === x && selectedLetter[1] === y) {
        newDisplay[x][y] = "";
        setSelectedLetter(null);
      } else if (selectedLetter[0] === x) {
        newDisplay[x][y] = "selected";
        newDisplay[selectedLetter[0]][selectedLetter[1]] = "";
        setSelectedLetter([x, y]);
      } else if (
        currentLetters[selectedLetter[0]][selectedLetter[1]].toLowerCase() ===
        currentLetters[x][y].toLowerCase()
      ) {
        if (x === 0) {
          newDisplay[x][y] = "hidden";
          newDisplay[selectedLetter[0]][selectedLetter[1]] = "success";
          newDisplay[1][selectedLetter[1]] = "success";
          setSelectedLetter(null);
        } else if (x === 2) {
          newDisplay[x][y] = "success";
          newDisplay[selectedLetter[0]][selectedLetter[1]] = "hidden";
          newDisplay[1][y] = "success";
          setSelectedLetter(null);
        }
      } else {
        newDisplay[x][y] = "failure";
        newDisplay[selectedLetter[0]][selectedLetter[1]] = "failure";
        setTimeout(() => {
          newDisplay[x][y] = "";
          newDisplay[selectedLetter[0]][selectedLetter[1]] = "";
          console.log(990);
          setCurrentLettersDisplay(newDisplay);
        }, 2000);
      }
    }

    setCurrentLettersDisplay(newDisplay);
    return;
  };

  useEffect(() => {
    const lettersArray = getRandomLetters(letters, LETTERS_COUNT);
    const shuffledLettersArray = getRandomLetters(lettersArray, LETTERS_COUNT);
    for (let i = 0; i < shuffledLettersArray.length; i++) {
      shuffledLettersArray[i] = shuffledLettersArray[i].toLowerCase();
    }
    setCurrentLetters([
      [...lettersArray],
      [...shuffledLettersArray],
      [...shuffledLettersArray],
    ]);
  }, []);
  console.log(currentLetters);

  return (
    <div className="mx-auto flex h-full w-full flex-col	font-sans lg:w-2/3 1080:w-1/2 ">
      {currentLetters[0] &&
        currentLetters[0].map((letter: string, index: number) => (
          <div className="flex flex-row justify-between " key={index}>
            <div className="">
              <Letter
                letter={letter}
                x={0}
                y={index}
                display={currentLettersDisplay[0][index]}
                selectHandler={selectHandler}
              />
            </div>
            <div className="flex ">
              <Letter
                x={1}
                y={index}
                letter={currentLetters[1][index].toUpperCase()}
                isDisplayed={false}
                display={currentLettersDisplay[1][index]}
                selectHandler={selectHandler}
              />
              <Letter
                letter={currentLetters[2][index]}
                x={2}
                y={index}
                display={currentLettersDisplay[2][index]}
                selectHandler={selectHandler}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
