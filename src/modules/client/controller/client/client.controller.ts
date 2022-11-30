import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('CLIENT')
@Controller('client')
export class ClientController {
  @Get()
  getHello(): string {
    return 'CLIENT CONTROLLER';
  }
}
