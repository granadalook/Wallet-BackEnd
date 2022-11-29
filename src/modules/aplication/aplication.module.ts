import { Module } from '@nestjs/common';
import { AplicationController } from './controller/aplication/aplication.controller';
import { AplicationService } from './services/aplication/aplication.service';

@Module({
  controllers: [AplicationController],
  providers: [AplicationService],
})
export class AplicationModule {}
