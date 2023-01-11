import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
//import axios from "axios";

export default function SearchBar() {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [classes, setClasses] = useState<any>();
  const [classeslist, setClasseslist] = useState();
  const search = useRef<any>();
  const router = useRouter();

  const enteredClassChangeHandler = () => {
    setIsValid(true);
  };

  const searchClass = (event: any) => {
    event.preventDefault();
    let valid = false;
    classes.forEach((eclass: Class) => {
      if (eclass.name === search.current.value) {
        router.push(`/subjects/English/${search.current.value}`);
        valid = true;
        return;
      }
      console.log("loop no success");
    });
    search.current.value = "";
    if (valid) {
      return;
    }
    setIsValid(false);
  };

  //   useEffect(() => {
  //     const getClasses = async () => {
  //       axios
  //         .get("http://localhost:5000/api/classes")
  //         .then(function (response) {
  //           setClasses(response.data);
  //           setClasseslist(
  //             response.data.map((eclass: Class, index: number) => {
  //               return <option value={eclass.name} key={index} />;
  //             })
  //           );
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     };
  //     getClasses();
  //   }, []);

  return (
    <div className="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
      <form onSubmit={searchClass}>
        <div className="w-full max-w-lg lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search class
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              list="classes"
              ref={search}
              onBlur={enteredClassChangeHandler}
              name="search"
              className={`focus:ring-green-light block w-full rounded-md border border-transparent bg-gray-200 py-2 pl-10 pr-3 leading-5  text-gray-500 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none sm:text-xl ${
                isValid ? "placeholder-gray-500" : "placeholder-red-500"
              }`}
              placeholder={isValid ? "Search class" : "Invalid class"}
              type="search"
            />
            <datalist id="classes">{classeslist}</datalist>
          </div>
        </div>
      </form>
    </div>
  );
}
