import Link from "next/link";
import Image from "next/image";

//import subjectImage from `../../../public/${props.subject.image}`
interface Props {
  subject: {
    image: string;
    name: string;
  };
  key: number;
}

export default function Subject(props: Props) {
  return (
    <Link
      className="m-2 sm:m-5 xl:mx-10"
      href={`/subjects/${props.subject.name}`}
    >
      <div className="p-2 duration-300 rounded-lg shadow bg-green-dark hover:scale-105 hover:bg-green-light sm:p-3">
        <div>
          <div className="relative w-32 h-32 sm:h-56 sm:w-56 1080:h-64 1080:w-64">
            <Image
              className="rounded-lg"
              src={`/${props.subject.image}`}
              alt="Subject Image"
              fill={true}
            />
          </div>
          <div className="pt-2 text-2xl text-gold-500 sm:pt-3 1080:text-4xl">
            <h1>{props.subject.name}</h1>
          </div>
        </div>
      </div>
    </Link>

    // <Link
    //   className="w-2/5 p-1 m-2 duration-300 rounded-lg shadow cursor-pointer bg-green-dark text-gold-500 hover:scale-105 hover:bg-green-light sm:p-2 lg:mx-10 lg:my-5 lg:w-1/4 1080:m-12 1440:m-14"
    //   href={`/subjects/${props.subject.name}`}
    // >
    //   <div>
    //     <div className="bg-white rounded-lg">
    //       <Image
    //         className="object-scale-down w-32 h-32 rounded-lg sm:h-48 sm:w-48 1080:h-64 1080:w-64"
    //         src={`/${props.subject.image}`}
    //         alt="Subject Image"
    //         layout="fill"
    //         objectFit="cover"
    //       />
    //     </div>
    //     <div className="text-lg sm:pt-2 sm:text-2xl 1080:text-3xl ">
    //       {props.subject.name}
    //     </div>
    //   </div>
    // </Link>
  );
}
