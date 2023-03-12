import { UserId } from "../domain/models/user"
import { IUserRepository } from "../domain/repository/user/IUserRepository"

export const getUserUseCase = async (
  userRepository: IUserRepository,
  id: string
):Promise<string> => {
  const userId = UserId.from(Number(id))
  const user = await userRepository.getOneById(userId)
  if (!user) {
    return 'user not found.'
  }
  return `email: ${user.email}, displayName: ${user.displayName}`
}
