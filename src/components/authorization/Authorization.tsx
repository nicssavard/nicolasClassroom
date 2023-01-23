import { useSession } from "next-auth/react";
import SignIn from "../../pages/auth/signin";

export default function Authorization(props: any) {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    <div></div>;
  }
  if (sessionData) {
    return <div>{props.children}</div>;
  }
  if (status === "unauthenticated") {
    return <SignIn></SignIn>;
  }
  return <div></div>;
}
