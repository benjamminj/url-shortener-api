import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Injectable()
export class UrlsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUrlDto: CreateUrlDto) {
    return this.prisma.shortenedUrl.create({
      data: createUrlDto,
    });
  }

  findAll() {
    return this.prisma.shortenedUrl.findMany();
  }

  findOneBySlug(slug: string) {
    return this.prisma.shortenedUrl.findUnique({ where: { slug } });
  }

  update(slug: string, updateUrlDto: UpdateUrlDto) {
    return this.prisma.shortenedUrl.update({
      where: { slug },
      data: updateUrlDto,
    });
  }

  remove(slug: string) {
    return this.prisma.shortenedUrl.delete({ where: { slug } });
  }
}
