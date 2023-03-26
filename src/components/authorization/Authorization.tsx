import { useSession } from "next-auth/react";
import SignIn from "../../pages/auth/signin";

export default function Authorization({ children }: any) {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (sessionData) {
    return <div>{children}</div>;
  }

  if (status === "unauthenticated") {
    return <SignIn />;
  }

  return <div>Unknown status</div>;
}
