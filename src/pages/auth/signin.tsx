import { signIn, signOut, useSession } from "next-auth/react";
import { useRef } from "react";
import Image from "next/image";
import { useState } from "react";

export default function SignIn() {
  //ref for username and password input
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isInvalid, setIsInvalid] = useState(false);

  const signinHandler = async (e: any) => {
    e.preventDefault();
    const test = await signIn("credentials", {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
      //redirect to home page after successfull login
      redirect: false,
    });
    if (test?.error) {
      setIsInvalid(true);
    } else {
      //window.location.href = "/";
    }
  };
  return (
    <div className="font-face-gm flex min-h-screen flex-col items-center justify-center bg-palette-500 text-center">
      {/* add a logo */}
      <div className="relative h-32 w-32 sm:h-40 sm:w-40 1080:h-64 1080:w-64">
        <Image src="/wflk.png" alt="Logo" fill={true} />
      </div>
      <div className="my-10 flex w-4/6 flex-col rounded-2xl bg-palette-600 text-center sm:w-1/4 1080:w-1/6">
        {/* username and password input */}
        <div className="p-3">
          <h1 className="text-xl font-bold text-gray-700">
            Welcome to my classroom!
          </h1>
          <form className="flex flex-col space-y-4 pt-3 text-gray-600">
            {isInvalid && (
              <div className="text-red-600">Invalid username or password</div>
            )}
            <input
              className="rounded-lg bg-palette-200 p-3"
              type="text"
              placeholder="username"
              ref={usernameRef}
            />
            <input
              autoComplete="new-password"
              className="rounded-lg bg-palette-200 p-3"
              type="password"
              placeholder="password"
              ref={passwordRef}
            />
            {/* submit button */}
            <button
              //className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              className="rounded-full bg-white/10 px-10 py-3 font-semibold text-gray-700 no-underline transition hover:bg-white/20"
              onClick={signinHandler}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// import { signIn, signOut, useSession } from "next-auth/react";
// import { useRef } from "react";
// import Image from "next/image";
// import { useState } from "react";

// export default function SignIn() {
//   //ref for username and password input
//   const [isInvalid, setIsInvalid] = useState(false);

//   const usernameRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

//   const signinHandler = async (e: any) => {
//     e.preventDefault();
//     const test = await signIn("credentials", {
//       username: usernameRef.current?.value,
//       password: passwordRef.current?.value,
//       //redirect to home page after successfull login
//       redirect: false,
//     });
//     if (test?.error) {
//       setIsInvalid(true);
//       console.log(test);
//     } else {
//       //window.location.href = "/";
//     }
//   };
//   return (
//     <div className="font-face-gm flex min-h-screen flex-col items-center justify-center bg-palette-500 text-center">
//       {/* add a logo */}
//       <div className="relative  h-32 w-32  sm:h-40 sm:w-40 1080:h-64 1080:w-64">
//         <Image src="/wflk.png" alt="Logo" fill={true} />
//       </div>
//       <div className="my-10 flex w-4/6 flex-col rounded-2xl bg-palette-600 text-center sm:w-1/4 1080:w-1/6">
//         {/* username and password input */}
//         <div className="p-3">
//           <h1 className="text-xl font-bold text-gray-700">
//             Welcome to my classroom!
//           </h1>
//           <form onSubmit={signinHandler}>
//             <div className="flex flex-col space-y-4 pt-3 text-gray-600">
//               <input
//                 className="rounded-lg bg-palette-100 p-3 "
//                 type="text"
//                 placeholder="username"
//                 ref={usernameRef}
//               />
//               <input
//                 autoComplete="new-password"
//                 className="rounded-lg bg-palette-100 p-3"
//                 type="password"
//                 placeholder="password"
//                 ref={passwordRef}
//               />
//               {isInvalid && (
//                 <div className="text-red-600">Invalid username or password</div>
//               )}
//               {/* submit button */}

//               <button
//                 //className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
//                 className="rounded-full bg-white/10 px-10 py-3 font-semibold text-gray-700 no-underline transition hover:bg-white/20"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
