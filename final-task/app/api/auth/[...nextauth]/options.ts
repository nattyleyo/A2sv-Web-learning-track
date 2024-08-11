import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchLogin, fetchSignUp, FormType } from "../../fetchData";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const allData = credentials as FormType;

        if (
          allData.name &&
          allData.confirmPassword &&
          allData.email &&
          allData.password
        ) {
          const otpData = await fetchSignUp(allData);
          if (otpData.success) {
            console.log(otpData, "otp sent successfully");
            return {
              id: otpData.userId,
              email: allData.email,
              name: allData.name,
            };
          }
        } else {
          const loginRes = await fetchLogin(allData);
          if (loginRes.success) {
            console.log(loginRes.data, "logged in successfully");
            return loginRes.data;
          }
        }
        return null; // Return null if authentication fails
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
