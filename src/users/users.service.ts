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
    return result[0];
  }
  async findOne(id: number): Promise<UsersEntity> {
    const [result] = await this.userRepository.query(`CALL GetUserById(?)`, [
      id,
    ]);
    return result[0];
  }
  async create(user: UsersEntity): Promise<UsersEntity> {
    const result = await this.userRepository.query(`CALL 	insertUser(?, ?, ?)`, [
      user.name,
      user.email,
      user.age,
    ]);
    return result;
  }

  async delete(id: number): Promise<void> {
    const result = await this.userRepository.query(`CALL deleteUser(?)`, [id]);
    return result;
  }

  async update(user: UsersEntity): Promise<UsersEntity> {
    const result = await this.userRepository.query(
      `CALL updateUser(?, ?, ?, ?)`,
      [user.id, user.name, user.email, user.age],
    );
    return result;
  }
}
