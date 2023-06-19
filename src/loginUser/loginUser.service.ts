import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LoginUserService {
  constructor(private prismaService: PrismaService) {}

  async login(getmail:string, getpassword: string): Promise<number | string | null> {
    const user = await this.prismaService.prisma.equalUser.findFirst({ where: { Mail:getmail } });
    if (!user) {
      return "アカウントないよ"; 
    }

    const passwordMatched = await bcrypt.compare(getpassword, user.Pass);
    if (!passwordMatched) {
      return "パスワード違うよ"; 
    }


    return user.User_ID;
  }
}
