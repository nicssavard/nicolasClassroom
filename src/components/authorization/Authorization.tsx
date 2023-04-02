import { useSession } from "next-auth/react";
import SignIn from "../../pages/auth/signin";
import LoadingPage from "../LoadingPage";

export default function Authorization({ children }: any) {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (sessionData) {
    return <div>{children}</div>;
  }

  if (status === "unauthenticated") {
    return <SignIn />;
  }

  return <div>Unknown status</div>;
}
