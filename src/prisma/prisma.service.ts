import { Injectable } from '@nestjs/common';
import { PrismaClient, EqualUser } from '@prisma/client';

@Injectable()
export class PrismaService {
  public readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(user: EqualUser): Promise<EqualUser> {
    return this.prisma.equalUser.create({ data: user });
  }
}
