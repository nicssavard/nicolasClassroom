import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string | undefined;
}
export default function SuccessModal(props: Props) {
  const [open, setOpen] = useState(true);
  console.log("render success modal: " + props.image);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="borde fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full  items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="rounded-lg  p-2">
                <motion.div
                  initial={{ y: -1000 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="relative h-64 w-64 2xl:h-96 2xl:w-96 ">
                    <Image
                      draggable="false"
                      className="rounded-lg"
                      src={`/teachers/${props.image}`}
                      alt="Flashcard Image"
                      fill={true}
                    />
                  </div>
                  <div className="text-center">
                    <StarIcon className="mx-auto mt-5 h-16 w-16 fill-yellow-500"></StarIcon>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
