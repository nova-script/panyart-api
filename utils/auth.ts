import bcrypt from 'bcryptjs';
import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const DEFAULT_NUMBER_OF_TIMES: number = 8;

export async function generateEncryptedPassword (password: string): Promise<string> {
    return await bcrypt.hash(password, DEFAULT_NUMBER_OF_TIMES).then(password => {return password})
}

export async function isUserPasswordCorrect (insertedPassword: string, email: string) {
    const userId = await getUserIdByEmail(email)
    const userObj: any = await prisma.user.findUnique({where: {id: userId}, select: {password: true}})
    const isCorrect: any = await bcrypt.compare(insertedPassword, userObj.password).then(isEqual => {return isEqual})
    return isCorrect
}

export async function getUserIdByEmail(email: string){
    try {
        const user: any = await prisma.user.findFirst({where: {email}, select: {id: true}})
        return user.id
    } catch (err) {
        return false
    }
}

export async function getUserById(id: string){
    return await prisma.user.findFirst({where: {id}})
}

export async function changePassword(newPassword: string, userId: string){
    const newEncryptedPassword: string = await generateEncryptedPassword(newPassword)
    await prisma.user.update({where: {id: userId}, data: {password: newEncryptedPassword}})
    return true
}

interface personalInformation {
    nickname: string,
    twitter: string,
    discord: string,
    instagram: string,
    facebook: string,
}

export async function updatePersonalInformation(data: personalInformation, userId: string){
    await prisma.user.update({where: {id: userId}, data: {
        nickname: data.nickname,
        twitter: data.twitter,
        discord: data.discord,
        instagram: data.instagram,
        facebook: data.facebook,
    }})
    return true
}
