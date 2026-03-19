import { Injectable, Logger } from "@nestjs/common";
import { UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";


Injectable()
export class UpdateTodoUseCase {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly loggers: Logger,
    ){}

    async execute (data: UpdateTodoDto) {
        try{
            this.loggers.log('creting toDo...')
            const todo = await this.updateTodoRepository.update(data);
            this.loggers.log('toDo update sucesfully');
            return todo;
        }catch(error){
            this.loggers.error(error);
            throw new Error ('falied to update toDo')
        }
    }
}
 