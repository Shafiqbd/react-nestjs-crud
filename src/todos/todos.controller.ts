import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoEntity } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Post()
  create(@Body() todo: TodoEntity): Promise<TodoEntity> {
    return this.todoService.create(todo);
  }
  @Get()
  findAll(): Promise<TodoEntity[]> {
    return this.todoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<TodoEntity> {
    return this.todoService.findOne(+id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() todo: TodoEntity,
  ): Promise<TodoEntity | null> {
    return this.todoService.update(+id, todo);
  }
  //test sdfsd

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(+id);
  }
}
