import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  static signup() {
    return { msg: 'I have signed up' };
  }

  static login() {
    return { msg: 'I have signed in' };
  }
}
