import ListClasses from "../../components/classes/ListClasses";
import { useRouter } from "next/router";
import { api } from "../../utils/api";

export default function Subjects(): JSX.Element {
  const router = useRouter();
  let subject = router.query.subject;
  if (!subject) {
    subject = "";
  }
  const { data: classes } = api.classes.getClassesForSubject.useQuery({
    subject: subject,
  });

  if (classes) {
    return <ListClasses classes={classes}></ListClasses>;
  }
  return <div>loading</div>;
}
