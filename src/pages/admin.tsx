import { signIn, signOut, useSession } from "next-auth/react";

export default function Admin() {
  const { data: sessionData } = useSession();

  if (sessionData) {
    return <h1>Admin section</h1>;
  } else {
    console.log("not logged in");
    return (
      <button
        className="px-10 py-3 font-semibold no-underline transition rounded-full bg-white/10 hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    );
  }
}
