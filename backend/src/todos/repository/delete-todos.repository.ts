import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/shared/database/prisma.datebase"

@Injectable()
export class DeleteTodoReposirory {
    constructor(private readonly prisma: PrismaService){}
    async execute (id:string){
        return await this.prisma.todo.delete({
            where:{ 
                id
            }
        })
    
    }
}
