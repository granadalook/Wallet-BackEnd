import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movement } from '../../entity/movement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovementService {
  constructor(
    @InjectRepository(Movement) private movementRepo: Repository<Movement>,
  ) {}
}
