import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './controller/account/account.controller';
import { Account } from './entity/account.entity';
import { AccountService } from './services/account/account.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
