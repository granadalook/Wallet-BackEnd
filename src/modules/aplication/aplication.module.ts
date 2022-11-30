import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AplicationController } from './controller/aplication/aplication.controller';
import { Aplication } from './entity/aplication.entity';
import { AplicationService } from './services/aplication/aplication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aplication])],
  controllers: [AplicationController],
  providers: [AplicationService],
})
export class AplicationModule {}
