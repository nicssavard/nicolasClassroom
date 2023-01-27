import { GetServerSideProps } from "next";
import { useRef } from "react";
import useStore from "../../store/userStore";

interface Props {
  groups: Group[];
}
export default function SelectGroup({ groups }: Props): JSX.Element {
  const groupRef = useRef<any>();
  const setGroup = useStore((state) => state.setGroup);
  const selectGroup = groups.map((group) => {
    return (
      <option key={group.id} value={group.name}>
        {group.name}
      </option>
    );
  });

  const groupSubmitHandler = () => {
    setGroup(groupRef?.current?.value);
  };
  return (
    <>
      <div className="my-10 mx-auto flex w-4/6 flex-col rounded-2xl bg-palette-600 text-center sm:w-1/4 1080:w-1/6">
        {/* username and password input */}
        <div className="p-3">
          <h1 className="text-xl font-bold ">Select the group</h1>
          <div className="flex flex-col space-y-4 pt-3">
            <select
              className="rounded-lg bg-palette-100 p-3"
              name="group"
              id="group"
              ref={groupRef}
            >
              {selectGroup}
            </select>
            {/* submit button */}
            <button
              //className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              onClick={groupSubmitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
