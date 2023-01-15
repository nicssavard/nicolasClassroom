import Image from "next/image";

interface Props {
  teacher: {
    name: string;
    image: string;
  };
  onClick: () => void;
}

export default function Teacher(props: Props) {
  return (
    <div
      onClick={props.onClick}
      className="m-auto w-fit rounded-lg bg-green-dark p-2 shadow duration-300 hover:scale-105 hover:bg-green-light sm:p-3"
    >
      <div>
        <div className="relative h-32 w-32 sm:h-56 sm:w-56 1080:h-64 1080:w-64">
          <Image
            className="rounded-lg"
            src={`/teachers/${props.teacher.image}`}
            alt="Subject Image"
            fill={true}
          />
        </div>
        <div className="pt-2 text-3xl text-gold-500 sm:pt-3 1080:text-4xl">
          <h1>{props.teacher.name}</h1>
        </div>
      </div>
    </div>
  );
}
