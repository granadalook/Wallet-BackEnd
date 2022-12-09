import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Movement } from '../../entity/Movement';

@Injectable()
export class MovementService {
  constructor(
    @InjectRepository(Movement) private movementRepo: Repository<Movement>,
  ) {}
  async getAll() {
    const movimientos = await this.movementRepo.find();
    if (movimientos.length === 0) {
      throw new NotFoundException(`NO EXISTEB MOVIMIENTOS`);
    }
  }
  async getById(id: string) {
    const movimiento = await this.movementRepo.findOne({
      where: { movId: id },
    });
    if (!movimiento) {
      throw new NotFoundException(` MOVIMIENTOS ${id} NO ENCONTRADO`);
    }
  }
}
