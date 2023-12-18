import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  create(todo: TodoEntity): Promise<TodoEntity> {
    return this.todoRepository.save(todo);
  }
  findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.find();
  }
  //   findOne(id: number): Promise<TodoEntity> {
  //     return this.todoRepository.findOne({ where: { id } });
  //   }
  async update(id: number, todo: TodoEntity): Promise<TodoEntity | null> {
    await this.todoRepository.update(id, todo);
    return this.todoRepository.findOne(id);
  }
  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
