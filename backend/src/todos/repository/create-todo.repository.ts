import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";
import { CreateTodoDto } from "../dto/create-todo.dto";
// crtl + . e depois clica em importar

@Injectable()
export class CreateTodoRepository {
    constructor(private readonly prisma: PrismaService){}
    // os dados estão todos no Dto
    async create (data: CreateTodoDto){
        return await this.prisma.todo.create({data}) // pequena função pronta que já é do própio prisma
    }
}
