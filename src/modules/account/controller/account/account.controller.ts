import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('ACCOUNT')
@Controller('account')
export class AccountController {
  @Get()
  getHello(): string {
    return 'ACCOUNT CONTROLLER';
  }
}
