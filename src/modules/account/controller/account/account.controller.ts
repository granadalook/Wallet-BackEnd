import { Controller, Get } from '@nestjs/common';

@Controller('account')
export class AccountController {
  @Get()
  getHello(): string {
    return 'ACCOUNT CONTROLLER';
  }
}
