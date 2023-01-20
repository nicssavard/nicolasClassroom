import NextAuth, { type NextAuthOptions, User } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
//import { privateEncrypt } from "crypto";
/* eslint-disable @typescript-eslint/no-var-requires */
const encryptpwd = require("encrypt-with-password");

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
//import { api } from "../../../utils/api.js";
export const authOptions: NextAuthOptions = {
  // Include user.id on session
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const encryptKey = env.PASSWORD_ENCRYPTION_KEY;
        console.log("credentials", credentials);
        console.log(credentials?.username);
        console.log(credentials?.password);
        if (!credentials?.username) {
          return null;
        }

        const user = await prisma.user.findFirst({
          where: { name: credentials?.username },
        });
        console.log("password");
        console.log(user?.encrypted_password);
        let passwordIsValid = null;
        try {
          console.log(
            encryptpwd.decrypt(user?.encrypted_password, credentials?.password)
          );
          passwordIsValid =
            env.PASSWORD_ENCRYPTION_KEY ===
            encryptpwd.decrypt(user?.encrypted_password, credentials?.password);
        } catch (error) {
          console.log("error", error);
        }

        //console.log(passwordIsValid);

        //console.log("user", user[0]);
        // const encryptedPassword = encryptpwd.encrypt(
        //   encryptKey,
        //   credentials?.password
        // );
        // console.log(encryptedPassword);
        // console.log("encryptedPassword", encryptedPassword);

        // Add logic here to look up the user from the credentials supplied
        //const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (passwordIsValid) {
          // Any object returned will be saved in `user` property of the JWT
          console.log("user", user);
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          console.log("error");
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

export default NextAuth(authOptions);
