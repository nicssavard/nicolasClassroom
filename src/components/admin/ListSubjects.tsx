import Link from "next/link";
import Image from "next/image";
import { api } from "../../utils/api";

export default function ListSubject() {
  const { data: subjects } = api.subjects.getSubjects.useQuery();

  if (!subjects) {
    return <div>Loading...</div>;
  } else {
    const subjectList = subjects.map((subject) => {
      return <Subject subject={subject} key={subject.id} />;
    });
    return (
      <div className="m-auto flex flex-wrap justify-center  text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
        {subjectList}
      </div>
    );
  }
}

interface SubjectProps {
  subject: {
    id: number;
    image: string;
    name: string;
  };
}

function Subject(props: SubjectProps) {
  return (
    <Link
      className="m-2 sm:m-5 xl:mx-10"
      href={`/subjects/${props.subject.id}`}
    >
      <div className="rounded-lg bg-palette-700 p-2 shadow duration-300 hover:scale-105 hover:bg-palette-800 sm:p-3">
        <div>
          <div className="relative h-32 w-32 sm:h-56 sm:w-56 1080:h-64 1080:w-64">
            <Image
              className="rounded-lg"
              src={`/subjects/${props.subject.image}`}
              alt="Subject Image"
              fill={true}
            />
          </div>
          <div className="pt-2 text-3xl text-gold-500 sm:pt-3 1080:text-4xl">
            <h1>{props.subject.name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
