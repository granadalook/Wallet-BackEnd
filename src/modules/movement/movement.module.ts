import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../account/entity/Account';
import { AccountService } from '../account/services/account/account.service';
import { MovementController } from './controller/movement/movement.controller';
import { Movement } from './entity/Movement';

import { MovementService } from './services/movement/movement.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movement, Account])],
  controllers: [MovementController],
  providers: [MovementService, AccountService],
})
export class MovementModule {}
