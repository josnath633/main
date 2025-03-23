import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "USER" | "ADMIN" | "MODERATOR"; // Définition du rôle
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: "USER" | "ADMIN" | "MODERATOR"; // Ajout du rôle dans User
  }
}
