import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Post()
  create(@Body() user: UsersEntity): Promise<UsersEntity> {
    return this.userservice.create(user);
  }
  @Put(':id')
  update(@Body() user: UsersEntity): Promise<UsersEntity> {
    return this.userservice.update(user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.userservice.delete(id);
  }
}
