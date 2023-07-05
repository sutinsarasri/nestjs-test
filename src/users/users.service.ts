import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export type User = any;

@Injectable()
export class UsersService {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '1234',
    },
    {
      userId: 2,
      username: 'maria',
      password: '4567',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
