import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import prisma from "../libs/prismadb"
async function getSession() {
    return await getServerSession(authOptions)
}
export default async function getUser() {
    const session = await getSession()
    if (!session) {
        return null
    }
    // console.log("++++++++++swession----------", session);
    const user = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        })
        // console.log("++++++++++swession", user);
    return session

}