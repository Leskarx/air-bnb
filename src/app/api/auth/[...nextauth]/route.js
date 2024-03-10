import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/app/libs/prismadb"
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',

            credentials: {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const userr = await prisma.user.findUnique({
                    where: {
                        email: credentials.Email
                    }
                })

                console.log("hellliooooooooo", userr);
                // const user = {
                //     id: 1,
                //     name: userr.name,
                //     email: credentials.Email
                // }

                if (userr) {
                    // Any object returned will be saved in `user` property of the JWT
                    return userr
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null

                }
            }
        })

    ],

    secret: process.env.NEXTAUTH_SECRET,
    debug: true

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }