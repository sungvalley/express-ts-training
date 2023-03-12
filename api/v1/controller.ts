import { Request, Response } from "express"
import { PrismaClient } from ".prisma/client"
import { UserRepository } from "../../infrastructure/prisma/repository/user"
import { getUserUseCase } from "../../application/getUserUseCase"

const prisma = new PrismaClient()
const userRepository = new UserRepository(prisma)

/**
 * return hello world
 */
export async function helloWorld(_req: Request, res: Response) {
    return res.status(200).json({ message: 'Hello World!' })
}

export async function getUser(req: Request, res: Response) {
    const { id } = req.params
    const result: string = await getUserUseCase(userRepository, id)
    return res.status(200).json({ message: result })
}
