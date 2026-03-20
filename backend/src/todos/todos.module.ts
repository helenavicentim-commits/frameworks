import { Logger, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';

const useCases =   Object.values(UseCases);
const repositories = Object.values(Repositories);
@Module({
  controllers: [TodosController],
  providers: [TodosService, 
    Logger,
    ...repositories,
    ...useCases,
  ],
})
export class TodosModule {}
