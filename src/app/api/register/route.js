import { NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'

export async function POST(request) {
    const body = await request.json()
    const { Email, Username, Password } = body
    const user = await prisma.user.create({
        data: {
            email: Email,
            name: Username,
            hasedPassword: Password

        }
    })
    console.log(user);




    return NextResponse.json(user)

}