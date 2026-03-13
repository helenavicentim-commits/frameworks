import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/shared/database/prisma.datebase"

@Injectable()
export class FindTodoReposirory {
    constructor(private readonly prisma: PrismaService){}
    async execute (id:string){
        return await this.prisma.todo.findUnique({
            where:{id}
        })
    
    }
}
