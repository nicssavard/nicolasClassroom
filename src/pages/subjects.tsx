//import { GetServerSideProps } from "next";
import ListSubject from "../components/subjects/ListSubjects";

import { api } from "../utils/api";

// type Props = {
//   subjects: Subject[] | undefined;
// }
export default function Subjects(): JSX.Element {
  const { data: subjects } = api.subjects.getSubjects.useQuery();
  console.log(subjects);
  if (subjects) {
    return <ListSubject subjects={subjects}></ListSubject>;
  }
  return <div>loading</div>;
}

// export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
//   const { data: subjects } = api.subjects.getSubjects.useQuery();
  
  
//   const _props: any = {
//     subjects: subjects,
//   }
//   return { props: _props }
// };

// export async function getStaticProps() {
//   const { data: subjects } = api.subjects.getSubjects.useQuery();

//   // Pass data to the page via props
//   return { props: { subjects } };
// }
