import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('APLICATION')
@Controller('aplication')
export class AplicationController {
  @Get()
  getHello(): string {
    return 'APLICATION CONTROLLER';
  }
}
