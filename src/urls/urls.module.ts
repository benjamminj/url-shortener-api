import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RedirectsController } from './redirects.controller';

@Module({
  controllers: [UrlsController, RedirectsController],
  providers: [UrlsService, PrismaService],
  exports: [UrlsService],
})
export class UrlsModule {}
