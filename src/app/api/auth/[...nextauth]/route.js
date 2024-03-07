import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/app/libs/prismadb"

export const authOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
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

                console.log(userr);
                const user = {
                    id: 1,
                    name: {
                        ...userr
                    }
                }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null

                }
            }
        })

    ],

    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }