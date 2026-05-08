import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/shared/database/prisma.database"

@Injectable()
export class FindTodoRepository {
    constructor(private readonly prisma: PrismaService){}
    async findByEmail (id:string){
        return await this.prisma.todo.findUnique({
            where:{id}
        })
    
    }
}
