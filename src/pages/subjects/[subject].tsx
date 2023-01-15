import ListClasses from "../../components/classes/ListClasses";
import { useRouter } from 'next/router'
import { api } from "../../utils/api";

export default function Subjects(): JSX.Element {
  const router = useRouter()
  let {subject} = router.query;
  if (!subject) {
    subject = ""
  }
  const { data: classes } = api.classes.getClassesForSubject.useQuery({ subject:subject});
  // let classes;
  // if (subject) {
  //   const { data: classes } = api.classes.getClassesForSubject.useQuery({ subject:subject});
  // }
  
  // console.log(subject);
  // console.log(classes);

  //const { data: classes } = api.classes.getClassesForSubject.useQuery();
  if (classes) {
    return <ListClasses classes={classes}></ListClasses>;
  }
  return <div>loading</div>;
}