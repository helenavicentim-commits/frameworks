import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodoRepository } from "../repository";

@Injectable()
export class FindAllTodoUseCase {
    constructor(
        private readonly findAllTodoRepository: FindAllTodoRepository,
        //importando o arquivo do repositório
        private readonly loggers: Logger,
    ){}

    async execute () {
        try{
            this.loggers.log('creting toDo...')
            const todo = await this.findAllTodoRepository.execute(); // chmando o arquivo o arquivo e função que está no arquivo
            this.loggers.log('toDo found sucesfully');
            return todo;
        }catch(error){
            this.loggers.error(error);
            throw new Error ('falied to found toDo')
        }
    }
}

//mostra todos os produtos (dados) que ficam no banco de dados