import bcrypt from 'bcrypt'
import prisma from "../../../utils/connect"
import { NextResponse } from 'next/server'

export async function POST(request){
    const body = await request.json();
    const { email, password } = body.data;
 console.log(body.data,"body")
    if( !email || !password) {
        return new NextResponse('Missing email and password', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user)
}