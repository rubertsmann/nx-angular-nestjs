import { Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    const photos = this.photoService.findAll();
    return this.photoService.findAll();
  }

  @Post()
  create(): Promise<Photo> {
    return this.photoService.create()
  }
}
