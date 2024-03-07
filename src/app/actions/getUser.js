import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
async function getSession() {
    return await getServerSession(authOptions)
}
export default async function getUser() {
    const session = await getSession()
    if (!session) {
        return null
    }
    console.log("++++++++++swession", session);
    return session

}