import { api } from "../../utils/api";
import { useState } from "react";
import { proseWrap } from "../../../prettier.config.cjs";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  student: User | undefined;
  pickStudent: () => void;
}
export default function Student(props: Props) {
  const pickStudent = () => {
    props.pickStudent();
  };

  if (props.student) {
    return (
      <div
        onClick={pickStudent}
        className="fixed right-8 flex h-28 w-28 sm:h-40 sm:w-40 1080:right-40"
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
          className="m-auto w-fit cursor-pointer rounded-lg bg-green-dark p-1 shadow-2xl sm:p-2 1080:p-3"
        >
          <div>
            <div className="xl:h-42 xl:w-42 relative h-32 w-32 sm:h-40 sm:w-40 1080:h-64 1080:w-64">
              <Image
                draggable="false"
                className="rounded-lg"
                src={`/users/${props.student.image}`}
                alt="Subject Image"
                fill={true}
              />
            </div>
            {/* <div className="pt-2 text-3xl text-gold-500 sm:pt-3 1080:text-4xl">
              <h1>{props.student.name}</h1>
            </div> */}
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <button
      className="fixed right-2 flex rounded-xl bg-green-dark py-2 px-4 text-xl font-bold text-gold-500  "
      onClick={pickStudent}
    >
      Student
    </button>
  );
}
