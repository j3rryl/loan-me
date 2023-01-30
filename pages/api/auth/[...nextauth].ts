import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth from 'next-auth/next'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from '../../../lib/mongodb'
import dbConnect from '../../../lib/dbConnect'
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../model/User'
import {compare} from 'bcrypt'


export default NextAuth({
    providers: [
        GithubProvider({
      clientId: `${process.env.GITHUB_CLIENT_ID}`,
      clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
    }),
     // Email & Password
     CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await dbConnect();

        // Find user with the email
        const user = await User.findOne({
          email: credentials?.email,
        });

        // Email Not found
        if (!user) {
          throw new Error("Email is not registered");
        }

        // Check hased password with DB hashed password
        const isPasswordCorrect = await compare(
          credentials!.password,
          user.hashedPassword
        );

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
    
    // GoogleProvider({
    //   clientId: '',
    //   clientSecret: '',
    // }),
    ],
    debug: process.env.NODE_ENV==="development",
    adapter:MongoDBAdapter(clientPromise, {
      databaseName: "loan-me-db",
    }),
    session: {
      strategy: "jwt",
    },
    jwt: {
      secret: process.env.JWT_AUTH_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
})