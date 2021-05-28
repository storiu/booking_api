import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor() {}
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'secret',
    },
    {
      userId: 1,
      username: 'john',
      password: 'secret',
    },
  ];
  async findOne(username: string): Promise<User> {
    return this.users.find((user) => user.username === username);
  }
}
