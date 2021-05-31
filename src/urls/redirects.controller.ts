import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { UrlsService } from './urls.service';

@Controller()
export class RedirectsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get(':slug')
  @Redirect()
  async getRedirect(@Param('slug') slug: string) {
    const { url } = await this.urlsService.findOneBySlug(slug);
    return { url };
  }
}
