import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('TOKEN')
@Controller('token')
export class TokenController {
  @Get()
  getHello(): string {
    return 'TOKEN CONTROLLER';
  }
}
