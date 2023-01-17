import Image from "next/image";

interface Props {
  teacher: Teacher;
}

export default function Teacher(props: Props) {
  return (
    <div className="m-auto w-fit cursor-pointer rounded-lg bg-green-dark p-2 shadow duration-300 hover:scale-105 hover:bg-green-light 1080:p-3">
      <div>
        <div className="xl:h-42 xl:w-42 relative h-32 w-32 sm:h-40 sm:w-40 1080:h-64 1080:w-64">
          <Image
            draggable="false"
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
