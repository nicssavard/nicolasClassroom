import Image from "next/image";
import { motion } from "framer-motion";

interface Teacher {
  image: string;
}

interface Props {
  teacher: Teacher;
}

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.1 },
};

const tapEffect = {
  scale: 0.95,
  transition: { duration: 1 },
};

const wrapperStyle =
  "m-auto w-fit cursor-pointer rounded-lg bg-palette-800 p-1 shadow-2xl sm:p-2 1080:p-3";

export default function Teacher({ teacher }: Props) {
  return (
    <motion.div
      whileHover={hoverEffect}
      transition={{ duration: 0.1 }}
      whileTap={tapEffect}
      className={wrapperStyle}
    >
      <div className="xl:h-42 xl:w-42 relative h-32 w-32 sm:h-40 sm:w-40 1080:h-64 1080:w-64">
        <Image
          draggable="false"
          className="rounded-lg"
          src={`/teachers/${teacher.image}`}
          alt="Teacher Image"
          fill={true}
        />
      </div>
    </motion.div>
  );
}
