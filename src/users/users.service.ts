import { Injectable } from '@nestjs/common';

// This must be the real class/interface for user entity
export type User = {
  userId: number;
  email: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor() {}

  private readonly users = [
    {
      userId: 1,
      email: 'john@gmail.com',
      username: 'john',
      password: 'secret',
    },
    {
      userId: 2,
      email: 'pine@gmail.com',
      username: 'pine',
      password: 'secret',
    },
  ];

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}
