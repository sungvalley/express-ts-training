import { Opaque } from 'type-fest'

export type UserId = Opaque<number, 'UserId'>

export const UserId = {
  from(value: number): UserId {
    return value as UserId
  }
}

export class UserDto {
  constructor(
    public readonly id: UserId,
    public readonly email: string,
    public readonly displayName: string
  ) {}
}
