import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoRepository } from "../repository";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class CreateTodoUseCase {
    constructor(
        private readonly createTodoRepository: CreateTodoRepository,
        private readonly loggers: Logger,
    ){}

    async execute (data: CreateTodoDto) {
        try{
            this.loggers.log('creting toDo...')
            const todo = await this.createTodoRepository.create(data);
            this.loggers.log('toDo created sucesfully');
            return todo;
        }catch(error){
            this.loggers.error(error);
            throw new Error ('falied to create toDo')
        }
    }
}
