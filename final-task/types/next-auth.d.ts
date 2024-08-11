// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // Custom user property
  }

  interface Session {
    user: {
      id: string; // Add the id property to the user in the session
      email: string;
      name: string;
      // Add other properties if needed
    };
  }

  interface JWT {
    id: string; // Add the id property to the JWT
  }
}
