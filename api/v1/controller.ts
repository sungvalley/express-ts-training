import { Request, Response } from "express"

/**
 * return hello world
 */
export async function helloWorld(_req: Request, res: Response) {
    return res.status(200).json({ message: 'Hello World!' })
}
