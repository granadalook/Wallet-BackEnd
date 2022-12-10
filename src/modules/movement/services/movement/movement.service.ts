import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateMovementDto } from '../../dto/movemet.dto';
import { Movement } from '../../entity/Movement';
import { AccountService } from '../../../account/services/account/account.service';

@Injectable()
export class MovementService {
  constructor(
    @InjectRepository(Movement) private movementRepo: Repository<Movement>,
    private accountService: AccountService,
  ) {}
  async getAll() {
    const movimientos = await this.movementRepo.find();
    if (movimientos.length === 0) {
      throw new NotFoundException(`NO EXISTEn MOVIMIENTOS`);
    }
    return movimientos;
  }
  async getById(id: string) {
    const movimiento = await this.movementRepo.findOne({
      where: { movId: id },
    });
    if (!movimiento) {
      throw new NotFoundException(` MOVIMIENTOS ${id} NO ENCONTRADO`);
    }
    return movimiento;
  }
  async create(body: CreateMovementDto) {
    const In = await this.accountService.getById(body.accIdIncome);
    const Out = await this.accountService.getById(body.accIdOutcome);
    if (parseInt(Out.accBalance) < parseInt(body.movAmount)) {
      throw new NotFoundException(` FONDOS INSUFICIENTES`);
    }
    Out.accBalance = await (
      parseInt(Out.accBalance) - parseInt(body.movAmount)
    ).toString();
    In.accBalance = await (
      parseInt(In.accBalance) + parseInt(body.movAmount)
    ).toString();
    await this.accountService.update(body.accIdIncome, In);
    await this.accountService.update(body.accIdOutcome, Out);
    const newMovement = await this.movementRepo.create(body);
    return this.movementRepo.save(newMovement);
  }
}
