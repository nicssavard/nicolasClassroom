import Homework from "./Homework";

interface Props {
  homeworks: Homework[];
}

export default function ListHomeworks(props: Props) {
  const homeworksList = props.homeworks.map((homework, index) => {
    return <Homework homework={homework} key={homework.id} />;
  });

  return (
    <div className="m-auto flex flex-wrap justify-center  text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {homeworksList}
    </div>
  );
}
