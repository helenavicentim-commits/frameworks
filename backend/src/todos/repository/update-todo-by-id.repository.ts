import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.datebase";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoReposirory {
    constructor(private readonly prisma: PrismaService){}

    async execute (id:string, data: UpdateTodoDto){
        return await this.prisma.todo.update({
            where:{id},
            data,
        });
    
    }
}
