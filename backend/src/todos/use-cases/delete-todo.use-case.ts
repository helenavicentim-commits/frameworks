import { Injectable, Logger } from "@nestjs/common";
import { DeleteTodoRepository } from "../repository";

@Injectable()
export default class DeleteTodoUseCase {
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        //importando o arquivo do repositório
        private readonly loggers: Logger,
    ){}

    async execute (id:string) {
        try{
            this.loggers.log('creting toDo...')
            const todo = await this.deleteTodoRepository.execute(id); // chmando o arquivo e função que está no arquivo
            this.loggers.log('toDo delete sucesfully');
            return todo;
        }catch(error){
            this.loggers.error(error);
            throw new Error ('falied to delete toDo')
        }
    }
}