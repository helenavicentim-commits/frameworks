import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.datebase";
import { CreateTodoDto } from "../dto/create-todo.dto";
// crtl + . e depois clica em importar

@Injectable()
export class CreateTodoRepository {
    create(data: CreateTodoDto) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService){}
    async execute (data: CreateTodoDto){
        return await this.prisma.todo.create({data})
    }
}
