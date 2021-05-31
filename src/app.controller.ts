import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const count = await this.prisma.shortenedUrl.count();
    console.log(count);
    return count.toString();
    // return this.appService.getHello();
  }
}
