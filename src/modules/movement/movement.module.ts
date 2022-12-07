import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovementController } from './controller/movement/movement.controller';
import { Movement } from './entity/Movement';

import { MovementService } from './services/movement/movement.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movement])],
  controllers: [MovementController],
  providers: [MovementService],
})
export class MovementModule {}
