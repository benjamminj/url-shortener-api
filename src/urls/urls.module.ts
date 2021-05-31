import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UrlsController],
  providers: [UrlsService, PrismaService],
})
export class UrlsModule {}
