import { Module } from '@nestjs/common';
import { MovementController } from './controller/movement/movement.controller';
import { MovementService } from './services/movement/movement.service';

@Module({
  controllers: [MovementController],
  providers: [MovementService],
})
export class MovementModule {}
