import Teacher from "../../components/wordsGame/Teacher";
import FlashcardsBoard from "../../components/wordsGame/FlashcardsBoard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Class() {
  return (
    <div className="text-center">
      <div>
        <Teacher></Teacher>
        <FlashcardsBoard></FlashcardsBoard>
      </div>
    </div>
  );
}
