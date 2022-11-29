import { Controller, Get } from '@nestjs/common';

@Controller('aplication')
export class AplicationController {
  @Get()
  getHello(): string {
    return 'APLICATION CONTROLLER';
  }
}
