import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

  addTodo(name: string, email: string) {
    console.log(`name : ${name} email : ${email}`);
    const todo = new Todo();
    todo.id = uuidv4();
    todo.name = 'Frank Horton';
    todo.email = 'ruzi@pudjov.tg';
    this.todoArray.push(todo);
  }

  getTodo() {
    return this.todoArray;
  }

  removeTodo(id: string) {
    if (id) {
      const findTodo = this.todoArray.find((item) => item.id === id);
      if (!findTodo) {
        throw new NotFoundException(`Todo with ${id} not found.`);
      } else {
        this.todoArray = this.todoArray.filter((item) => item.id !== id);
        return this.todoArray;
      }
    } else {
      throw new NotFoundException(`Pless require ${id}.`);
    }
  }
}
