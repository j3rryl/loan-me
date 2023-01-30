import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth from 'next-auth/next'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from '../../../lib/mongodb'



export default NextAuth({
    providers: [
        GithubProvider({
      clientId: `${process.env.GITHUB_CLIENT_ID}`,
      clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      // @ts-ignore
      scope: "read:user",
      
    }),
    
    // GoogleProvider({
    //   clientId: '',
    //   clientSecret: '',
    // }),
    ],
    adapter:MongoDBAdapter(clientPromise),
    session: {
    },
    jwt: {
      secret: process.env.AUTH_SECRET,
    },
})