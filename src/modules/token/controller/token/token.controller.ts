import { Controller, Get } from '@nestjs/common';

@Controller('token')
export class TokenController {
  @Get()
  getHello(): string {
    return 'TOKEN CONTROLLER';
  }
}
