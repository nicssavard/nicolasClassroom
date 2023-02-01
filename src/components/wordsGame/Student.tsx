import { motion } from "framer-motion";
import Image from "next/image";
import useStore from "../../store/userStore";

interface Props {
  student: User | undefined;
  pickStudent: () => void;
}
export default function Student(props: Props) {
  const group = useStore((state) => state.group);
  const pickStudent = () => {
    props.pickStudent();
  };

  if (props.student) {
    return (
      <div
        onClick={pickStudent}
        className="fixed right-2 flex h-28 w-28 sm:right-8 sm:h-40 sm:w-40 1080:right-40"
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          transition={{ duration: 0.1 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 1 } }}
          whileTap={{ scale: 0.95, transition: { duration: 1 } }}
          className="m-auto w-fit cursor-pointer rounded-lg bg-palette-800 p-1 shadow-2xl sm:p-2 1080:p-3"
        >
          <div>
            <div className=" relative h-24 w-24 sm:h-32 sm:w-32 1080:h-56 1080:w-56">
              <Image
                draggable="false"
                className="rounded-lg"
                src={`/users/${props.student.image}`}
                alt="Subject Image"
                fill={true}
              />
            </div>
            <div className="text-md pt-1 text-gold-500 sm:pt-2 sm:text-2xl 1080:text-4xl">
              <h1>{props.student.points}</h1>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <button
      className="text-md fixed right-2 flex rounded-xl bg-palette-800 py-2 px-4 font-bold text-gold-500 sm:text-2xl  "
      onClick={pickStudent}
    >
      {group.name} Students
    </button>
  );
}
