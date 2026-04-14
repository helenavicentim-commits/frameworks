import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

// É boa prática exportar o enum para que ele possa ser usado em outros lugares
export enum TodoPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string; 
  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @IsEnum(TodoPriority)
  @IsOptional() 
  priority?: TodoPriority;

  @IsDateString()
  @IsOptional()
  dueAt?: Date;

  @IsDateString()
  @IsOptional()
  completedAt?: Date; 

  @IsString()
  @IsUUID() 
  @IsNotEmpty()
  userId: string;

}