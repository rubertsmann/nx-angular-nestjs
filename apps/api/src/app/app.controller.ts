import { Controller, Get } from '@nestjs/common';

import { Message } from '@betcha/api-interfaces';

import { AppService } from './app.service';
import { PhotoService } from './photo/photo.service';

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
    ) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }


}
