import Link from "next/link";
import Image from "next/image";

interface Props {
  homework: Homework;
  key: number;
}

export default function Homework(props: Props) {
  return (
    <Link
      className="m-2 sm:m-3 xl:mx-3 1080:m-8"
      href={`/homeworks/${props.homework.file}`}
      target="_blank"
    >
      <div className="rounded-lg bg-palette-700 p-1  shadow duration-300 hover:scale-105 hover:bg-palette-800 sm:p-2">
        <div>
          <div className="relative h-20 w-20 sm:h-32 sm:w-32 lg:h-40 lg:w-40 1080:h-64 1080:w-64">
            <Image
              className="rounded-lg"
              src={`/homeworks/${props.homework.image}`}
              alt="Subject Image"
              fill={true}
            />
          </div>
          <div className=" w-32 pt-2 text-3xl text-gold-500 sm:w-32 sm:pt-2 lg:w-40 1080:w-64 1080:text-4xl">
            <h1>{props.homework.name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
