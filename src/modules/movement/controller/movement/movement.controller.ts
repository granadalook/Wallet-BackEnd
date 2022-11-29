import { Controller, Get } from '@nestjs/common';

@Controller('movement')
export class MovementController {
  @Get()
  getHello(): string {
    return 'MOVEMENT CONTROLLER';
  }
}
