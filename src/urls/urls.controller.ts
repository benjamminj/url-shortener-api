import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
} from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post('')
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.create(createUrlDto);
  }

  @Get('')
  findAll() {
    return this.urlsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.urlsService.findOneBySlug(slug);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() updateUrlDto: UpdateUrlDto) {
    return this.urlsService.update(slug, updateUrlDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.urlsService.remove(slug);
  }
}
