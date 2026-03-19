import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}

// NÃO PRECIAMOS FAZER A MESMA COISA PRO UPDATE PORQUE ELE JÁ ESTÁ EXTENDENDO DO CREATE, CREATE ESTÁ COMPARTILHANDO

// qunado vamos atualizar podemos mandar parcialmete os dados, não somos obrigados a mandar todos