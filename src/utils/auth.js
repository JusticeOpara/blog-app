import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {label: "Email", type: "email", placeholder: "test@example.com"},
        password: { label: "Password", type: "password" },
        // email: {label: "Email", type: "email", placeholder: "test@example.com"},
      },
      async authorize(credentials) {
        const email = credentials?.email;
        console.log(email,"email")
        const password = credentials?.password;
        // check if the email amd password is vaild
        if (!email || !password) {
          throw new Error('Please enter an email and password')
        }
        // check if the user exists
        const user = await prisma.user.findUnique({
          where: {
            email:email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('No user found')
      }

      const passwordMatch = await bcrypt.compare(password, user.hashedPassword)

      // if password does not match
      if (!passwordMatch) {
          throw new Error('Incorrect password')
      }

      return user;
      },
    
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export const getAuthSession = () => getServerSession(authOptions);
