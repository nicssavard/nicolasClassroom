import { signIn, signOut, useSession } from "next-auth/react";
import SignIn from "../../pages/auth/signin";
import { useStore } from "../../store/userStore";
import { getServerAuthSession } from "../../server/auth";
import { api } from "../../utils/api";
import type { GetServerSidePropsContext, NextPage } from "next";
import { GetServerSideProps } from "next";
//import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
const Authorization: NextPage = (props: any) => {
  const { data: sessionData, status } = useSession();

  // console.log(userData);
  // const user = useStore((state) => state.user);
  // console.log(sessionData?.user?.name);
  // console.log(user);
  // // const { data: userData} = api.users.getUserByName.useQuery({name: sessionData?.user?.name});
  // // const user = useStore((state) => state.user);
  // // console.log(sessionData?.user?.name);

  // console.log(user);
  // console.log(status);
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
};

export default Authorization;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
//   //const session = await getServerAuthSession(context);
//   const session = "ff";
//   console.log(session);
//   return {
//     props: {
//       session: session,
//     },
//   };
// };

// export const GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   //const session = await getServerAuthSession(ctx);
//   const session = "sss";
//   console.log("wwtest");
//   return {
//     props: {
//       session: session,
//     },
//   };
// };
export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  console.log(999999);
  const session = "dd";
  return {
    props: {
      session: session,
    },
  };
};
