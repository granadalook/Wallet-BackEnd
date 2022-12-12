import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { App } from '../aplication/entity/App';
import { AplicationService } from '../aplication/services/aplication/aplication.service';
import { ClientController } from './controller/client/client.controller';
import { Client } from './entity/Client';

import { ClientService } from './services/client/client.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, App])],
  controllers: [ClientController],
  providers: [ClientService, AplicationService],
})
export class ClientModule {}
