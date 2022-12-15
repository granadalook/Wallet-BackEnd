import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../account/entity/Account';
import { AccountService } from '../account/services/account/account.service';
import { MovementController } from './controller/movement/movement.controller';
import { Movement } from './entity/Movement';
import { MovementService } from './services/movement/movement.service';
import { ClientService } from '../client/services/client/client.service';
import { Client } from '../client/entity/Client';
import { App } from '../aplication/entity/App';
import { AplicationService } from '../aplication/services/aplication/aplication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movement, Account, Client, App])],
  controllers: [MovementController],
  providers: [
    MovementService,
    AccountService,
    ClientService,
    AplicationService,
  ],
})
export class MovementModule {}
