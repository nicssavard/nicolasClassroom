import { signIn, signOut, useSession } from "next-auth/react";
import SignIn from "../../pages/auth/signin";

export default function Authorization(props: any) {
  const { data: sessionData } = useSession();

  if (sessionData) {
    return <div>{props.children}</div>;
  } else {
    console.log("not logged in");
    return <SignIn></SignIn>;
  }
}
