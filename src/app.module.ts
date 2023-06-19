import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUser } from './CreateUser/CreateUser.service';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './CreateUser/CreateUser.controller';
import { LoginUserService } from './loginUser/LoginUser.service';
import { LoginUserController} from './loginUser/loginUser.controller';

@Module({
  imports: [],
  controllers: [AppController,UserController,LoginUserController],
  providers: [AppService,CreateUser,PrismaService,LoginUserService],
})
export class AppModule {}
