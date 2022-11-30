import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('CLIENT')
@Controller('client')
export class ClientController {
  @Get()
  @ApiOperation({ summary: 'CLIENT' })
  getHello(): string {
    return 'CLIENT CONTROLLER';
  }
}
