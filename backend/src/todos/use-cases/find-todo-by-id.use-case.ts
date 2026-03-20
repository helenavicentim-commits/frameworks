import { Injectable, Logger } from "@nestjs/common";
import { FindTodoRepository } from "../repository";

@Injectable()
export class FindTodoUseCase {
    constructor(
        private readonly findTodoRepository: FindTodoRepository,
        //importando o arquivo do repositório
        private readonly loggers: Logger,
    ){}

    async execute (id:string) { // como no reporitório pasamos id temos que passar aqui também e no create passa data 
        try{
            this.loggers.log('creting toDo...')
            const todo = await this.findTodoRepository.execute(id); // chamando o arquivo e função que está no arquivo
            this.loggers.log('toDo found sucesfully');
            return todo;
        }catch(error){
            this.loggers.error(error);
            throw new Error ('falied to find toDo')
        }
    }
}

