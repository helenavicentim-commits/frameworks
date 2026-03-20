import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CreateTodoUseCase, FindAllTodoUseCase, FindTodoUseCase, UpdateTodoUseCase } from './use-cases';
import DeleteTodoUseCase from './use-cases/delete-todo.use-case';

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly updateTodoUseCase: UpdateTodoUseCase,
    private readonly findAllTodoUseCase: FindAllTodoUseCase,
    private readonly findTodoUseCase: FindTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCase,
  ) {}
  async create(data: CreateTodoDto){
    return await this.createTodoUseCase.execute(data)
  }
  async update(id: string, data){
    return await this.updateTodoUseCase.execute(id,data)
  }
  async delete(id: string){
    return await this.deleteTodoUseCase.execute(id)
  }
  async findAll(data: FindAllTodoUseCase){
    return await this.findAllTodoUseCase.execute()
  }
  async find (id:string ){
    return await this.findTodoUseCase.execute(id)
  }
}