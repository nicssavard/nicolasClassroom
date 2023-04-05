import { useState } from "react";
import ListSubject from "./ListSubjects";
import NewSubject from "./NewSubject";

export default function AdminSubject() {
  const [action, setAction] = useState("list");

  const handleAction = (action: string) => {
    setAction(action);
  };

  return (
    <div className="flex-column">
      <div className="flex justify-center">
        <button
          onClick={() => {
            setAction("list");
          }}
          className="m-4 rounded-full bg-palette-700 py-2 px-4 text-4xl font-bold text-gold-500 hover:bg-green-light"
        >
          List
        </button>
        <button
          onClick={() => {
            setAction("new");
          }}
          className="m-4 rounded-full bg-palette-700 py-2 px-4 text-4xl font-bold text-gold-500 hover:bg-green-light"
        >
          New
        </button>
      </div>
      <div>{action === "list" && <ListSubject />}</div>
      <div>{action === "new" && <NewSubject setAction={handleAction} />}</div>
    </div>
  );
}
