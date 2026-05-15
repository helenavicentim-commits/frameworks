import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CurrentUser } from 'src/shared/database/auth/current-user.decorator';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  
  @UseGuards()
  @Get('private')
  privateRoute(@CurrentUser() user: { id:string; email:string}){
    return {
      message: 'Rota protegida liberada',
      user,
    };
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.todosService.find(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.delete(id);
  }
}
