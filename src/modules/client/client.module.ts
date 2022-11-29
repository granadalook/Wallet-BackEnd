import { Module } from '@nestjs/common';
import { ClientController } from './controller/client/client.controller';
import { ClientService } from './services/client/client.service';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
