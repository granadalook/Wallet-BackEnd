import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AplicationController } from './controller/aplication/aplication.controller';
import { App } from './entity/App';

import { AplicationService } from './services/aplication/aplication.service';

@Module({
  imports: [TypeOrmModule.forFeature([App])],
  controllers: [AplicationController],
  providers: [AplicationService],
  exports: [AplicationService],
})
export class AplicationModule {}
