import { Logger, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { Prisma } from '@prisma/client/extension';
import { PrismaService } from 'src/shared/database/prisma.datebase';

const useCases =   Object.values(UseCases);
const repositories = Object.values(Repositories);
@Module({
  controllers: [TodosController],
  providers: [TodosService, 
    TodosService,
    PrismaService,
    Logger,
    ...repositories,
    ...useCases,
  ],
})
export class TodosModule {}
