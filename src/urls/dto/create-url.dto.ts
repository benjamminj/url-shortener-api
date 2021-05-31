import { Prisma } from '.prisma/client';

export class CreateUrlDto implements Prisma.ShortenedUrlCreateInput {
  url: string;
  slug: string;
}
