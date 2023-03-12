import { PrismaClient } from '@prisma/client'
import { userDtoFactory } from '../../../../domain/factory/user'
import { UserId, UserDto } from "../../../../domain/models/user"
import { IUserRepository  } from "../../../../domain/repository/user/IUserRepository"

export class UserRepository implements IUserRepository {
  constructor (readonly prisma: PrismaClient) {}

  readonly getOneById = async (id: UserId): Promise<UserDto | null> => {
    const row = await this.prisma.user.findFirst({
      where: { id }
    })

    if (!row) {
      return null
    }

    return userDtoFactory(row)
  }
}
