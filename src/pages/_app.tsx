import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { api } from "../utils/api";

import "../styles/globals.css";

import Header from "../components/header/Header";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Nicolas Classroom</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/wflk2.png" />
      </Head>
      <Header></Header>
      <div
        className={`font-face-gm min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-center`}
      >
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
