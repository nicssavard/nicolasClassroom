import Subject from "./Subject";

interface Props {
  subjects: { id: number; image: string; name: string }[];
}

export default function ListSubject(props: Props) {
  const subjectList = props.subjects.map((subject, index) => {
    return <Subject subject={subject} key={index} />;
  });

  return (
    <div className="m-auto flex flex-wrap justify-center pt-5 text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {subjectList}
    </div>
  );
}
