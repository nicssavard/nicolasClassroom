import { useSession } from "next-auth/react";
import SignIn from "../../pages/auth/signin";

export default function Authorization({ children }: { children: JSX.Element }) {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    <div></div>;
  }
  if (sessionData) {
    return <div>{children}</div>;
  }
  if (status === "unauthenticated") {
    return <SignIn></SignIn>;
  }
  return <div></div>;
}
