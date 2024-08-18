import { BACKEND_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(BACKEND_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.backendTokens.refreshToken}`,
    },
  });

  const response = await res.json();
  // if (res.ok) {
  // ...
  // }

  return {
    ...token,
    backendTokens: response,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        const { username, password } = credentials;
        const res = await fetch(BACKEND_URL + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            login: username,
            pwd: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 401) {
          console.log(res.statusText);

          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("jwt callback");
      console.log(user);
      if (user) {
        return { ...token, ...user };
      }
      // console.log({ token, user });
      if (new Date().getTime() < token.backendTokens.expiresIn) {
        return token;
      }
      return await refreshToken(token);
    },
    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;
      // console.log("session: ", session);
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    // signIn: "/auth/signin",
    //
    // signOut: "/auth/signout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
