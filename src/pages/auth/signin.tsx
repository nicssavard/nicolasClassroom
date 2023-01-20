import { signIn, signOut, useSession } from "next-auth/react";
import { useRef } from "react";
import Image from "next/image";

export default function SignIn() {
  //ref for username and password input
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="font-face-gm flex min-h-screen flex-col items-center justify-center bg-blue-500 text-center">
      {/* add a logo */}
      <div className="relative h-32 w-32 sm:h-40 sm:w-40 1080:h-64 1080:w-64">
        <Image src="/wflk.png" alt="Logo" fill={true} />
      </div>
      <div className="my-10 flex w-4/6 flex-col rounded-2xl bg-green-light text-center sm:w-1/4 1080:w-1/6">
        {/* username and password input */}
        <div className="p-3">
          <h1 className="text-xl font-bold ">Welcome to my classroom!</h1>
          <div className="flex flex-col space-y-4 pt-3">
            <input
              className="rounded-lg bg-gray-200 p-3"
              type="text"
              placeholder="username"
              ref={usernameRef}
            />
            <input
              className="rounded-lg bg-gray-200 p-3"
              type="password"
              placeholder="password"
              ref={passwordRef}
            />
            {/* submit button */}
            <button
              //className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              onClick={() =>
                signIn("credentials", {
                  username: usernameRef.current?.value,
                  password: passwordRef.current?.value,
                  //redirect to home page after login
                  callbackUrl: "/",
                })
              }
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
