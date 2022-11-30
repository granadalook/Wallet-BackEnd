import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('MOVEMENT')
@Controller('movement')
export class MovementController {
  @Get()
  getHello(): string {
    return 'MOVEMENT CONTROLLER';
  }
}
