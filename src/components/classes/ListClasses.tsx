import Class from "./Class";

interface Props {
  classes: { image: string; name: string }[];
}

export default function ListClasses(props: Props) {
  const classList = props.classes.map((eclass, index) => {
    return <Class class={eclass} key={index} />;
  });

  return (
    <div className="flex flex-wrap justify-center pt-5 m-auto text-center sm:w-4/5 xl:w-4/6 1080:w-4/6 1440:w-1/2">
      {classList}
    </div>
  );
}
