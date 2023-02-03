import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../utils/api";
import DataList from "./DataList";

export default function SearchBar() {
  const [isValid, setIsValid] = useState<boolean>(true);

  const search = useRef<any>();
  const router = useRouter();

  const { data: classesData } = api.classes.getClasses.useQuery();

  const enteredClassChangeHandler = () => {
    setIsValid(true);
  };

  const searchClass = (event: any) => {
    event.preventDefault();
    let valid = false;
    if (classesData)
      classesData.forEach((eclass: any) => {
        if (eclass.name === search.current.value) {
          setIsValid(true);
          router.push(`/class/${eclass.id}`);
          valid = true;
          return;
        }
      });
    search.current.value = "";
    if (valid) {
      return;
    }
    setIsValid(false);
  };

  return (
    <div className="h-13 flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
      <form onSubmit={searchClass}>
        <div className="w-full max-w-lg lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search class
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              list="classes"
              ref={search}
              onBlur={enteredClassChangeHandler}
              name="search"
              className={`block w-full rounded-md  bg-palette-100 py-2 pl-10 pr-3 leading-5 text-gray-500 focus:bg-palette-50 focus:text-gray-900 focus:outline-none  sm:text-xl ${
                isValid ? "placeholder-gray-500" : "placeholder-red-500"
              }`}
              placeholder={isValid ? "Search class" : "Invalid class"}
              type="search"
            />
            <DataList classes={classesData}></DataList>
          </div>
        </div>
      </form>
    </div>
  );
}
