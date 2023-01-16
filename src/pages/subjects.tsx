import ListSubject from "../components/subjects/ListSubjects";

import { api } from "../utils/api";

export default function Subjects(): JSX.Element {
  const { data: subjects } = api.subjects.getSubjects.useQuery();
  if (subjects) {
    return <ListSubject subjects={subjects}></ListSubject>;
  }
  return <div>loading</div>;
}
