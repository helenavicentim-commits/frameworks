import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.database";

@Injectable()
export class FindUserByEmailRepository{
    constructor(private readonly prisma: PrismaService) {}

    async fundByEmail (email: string){
        return await this.prisma.user.findUnique({
            where:{
                email,
            },
        })
    }
}