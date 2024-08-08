import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchLogin, fetchSignUp, FormType } from "../../fetchData";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
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
            console.log(otpData, "otp send successfully");
            // Return a flat user object
            return {
              id: otpData.userId,
              email: allData.email,
              name: allData.name,
              // You can include additional fields if needed
            };
          }
        } else {
          const loginRes = await fetchLogin(allData);
          if (loginRes.success) {
            console.log(loginRes.data, "login successfully");
            return {
              id: loginRes.data.id,
              email: loginRes.data.email,
              name: loginRes.data.name,
            };
          }
        }
        return null; // Return null if authentication fails
      },
    }),
  ],
  pages: {
    signIn: "/login/",
  },
};
