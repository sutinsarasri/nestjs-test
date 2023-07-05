import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getHello() {
    return this.todoService.getTodo();
  }

  @Post()
  getInfo(@Body('name') name: string, @Body('email') email: string) {
    return this.todoService.addTodo(name, email);
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todoService.removeTodo(id);
  }
}
