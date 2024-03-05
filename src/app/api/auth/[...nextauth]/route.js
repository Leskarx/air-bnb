import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',

            credentials: {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                console.log(credentials);
                const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null

                }
            }
        })

    ]


}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }