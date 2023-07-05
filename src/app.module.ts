import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TodoModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://sutinsarasri:VAq5ihdZij3YGo8n@clusternestjs.go6vsd0.mongodb.net/?retryWrites=true&w=majority',
    ),
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
