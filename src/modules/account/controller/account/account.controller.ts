import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('ACCOUNT')
@Controller('account')
export class AccountController {
  @Get()
  @ApiOperation({ summary: 'ACCOUNT' })
  getHello(): string {
    return 'ACCOUNT CONTROLLER';
  }
}
