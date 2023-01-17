import Link from "next/link";
import Image from "next/image";

interface Props {
  subject: {
    image: string;
    name: string;
  };
  onClick: (answer: string) => void;
  key: number;
}

export default function Flashcard(props: Props) {
  return (
    <div
      onClick={() => {
        props.onClick(props.subject.name);
      }}
      className=" m-2 cursor-pointer rounded-lg bg-green-dark p-2 shadow duration-300 hover:scale-105 hover:bg-green-light sm:m-5 sm:p-3 xl:mx-10"
    >
      <div>
        <div className="relative h-32 w-32 sm:h-56 sm:w-56 1080:h-64 1080:w-64">
          <Image
            draggable="false"
            className="rounded-lg"
            src={`/flashcards/${props.subject.image}`}
            alt="Flashcard Image"
            fill={true}
          />
        </div>
        <div className="pt-2 text-3xl text-gold-500 sm:pt-3 1080:text-4xl">
          <h1>{props.subject.name}</h1>
        </div>
      </div>
    </div>
  );
}
