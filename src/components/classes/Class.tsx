import Link from "next/link";
import Image from "next/image";

interface Props {
  class: {
    image: string;
    name: string;
  };
  key: number;
}

export default function Class(props: Props) {
  return (
    <Link
      className="m-2 sm:m-5 xl:mx-10"
      href={`/class/${props.class.name}`}
    >
      <div className="p-2 duration-300 rounded-lg shadow bg-green-dark hover:scale-105 hover:bg-green-light sm:p-3">
        <div>
          <div className="relative w-32 h-32 sm:h-56 sm:w-56 1080:h-64 1080:w-64">
            <Image
              className="rounded-lg"
              src={`/classes/${props.class.image}`}
              alt="Subject Image"
              fill={true}
            />
          </div>
          <div className="pt-2 text-3xl text-gold-500 sm:pt-3 1080:text-4xl">
            <h1>{props.class.name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
