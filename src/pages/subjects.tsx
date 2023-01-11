import { api } from "../utils/api";

export default function Subjects() {
  const { data: subjects } = api.subjects.getSubjects.useQuery();

  console.log(subjects);
  return <h1>Subjects</h1>;
}
