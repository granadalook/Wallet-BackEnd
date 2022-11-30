import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './controller/client/client.controller';
import { Client } from './entity/client.entity';
import { ClientService } from './services/client/client.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
