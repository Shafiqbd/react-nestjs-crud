import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async findAll(): Promise<UsersEntity[]> {
    const result = await this.userRepository.query(`CALL getAllUsers()`);
    console.log('result', result[0]);
    return result[0];
  }
  async findOne(id: number): Promise<UsersEntity> {
    const [result] = await this.userRepository.query(`CALL GetUserById(?)`, [
      id,
    ]);
    // const result = await this.userRepository.query<UsersEntity>(
    //   `CALL GetUserById(:id)`,
    //   {
    //     id,
    //   },
    // );
    console.log('result', result[0]);
    return result[0];
  }
}
