import { UserId, UserDto } from '../../models/user'

export interface IUserRepository {
  getOneById(id: UserId): Promise<UserDto | null>
}
