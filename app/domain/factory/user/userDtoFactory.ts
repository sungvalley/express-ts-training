import { user } from "@prisma/client"
import { UserDto, UserId } from "../../models/user"

export const userDtoFactory = (row: user): UserDto => {
  return new UserDto(
    UserId.from(row.id),
    row.email,
    row.displayName
  )
}
