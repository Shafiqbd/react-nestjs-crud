import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userservice: UsersService) {}
  @Get()
  findAll(): Promise<UsersEntity[]> {
    return this.userservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UsersEntity> {
    return this.userservice.findOne(id);
  }
}
