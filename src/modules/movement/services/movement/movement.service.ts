import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Movement } from '../../entity/Movement';

@Injectable()
export class MovementService {
  constructor(
    @InjectRepository(Movement) private movementRepo: Repository<Movement>,
  ) {}
}
