import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UrlsService } from './urls/urls.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
    private readonly urlService: UrlsService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return 'Hello world';
  }
}
