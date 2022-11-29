import { Module } from '@nestjs/common';
import { TokenController } from './controller/token/token.controller';
import { TokenService } from './services/token/token.service';

@Module({
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
