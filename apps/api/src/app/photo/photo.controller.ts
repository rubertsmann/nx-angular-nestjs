import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { IPhoto } from '@betcha/api-interfaces';
import { resolve } from 'path';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {    return this.photoService.findAll();
  }

  @Post()
  create(@Body() photo: IPhoto): Promise<Photo> {
    return this.photoService.create(photo)
  }
}
