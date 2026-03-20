import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.datebase";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoRepository {

    constructor(private readonly prisma: PrismaService){}

    // dois parametros data e id
    async execute (id:string, data: UpdateTodoDto){
        return await this.prisma.todo.update({
            where:{id},
            data,
        });
    
    }
}
