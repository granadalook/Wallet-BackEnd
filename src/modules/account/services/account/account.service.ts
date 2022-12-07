import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAccountDto } from '../../dto/account.dto';
import { Account } from '../../entity/Account';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepo: Repository<Account>,
  ) {}

  async getAll(): Promise<Array<Account>> {
    const account = await this.accountRepo.find();
    if (account.length === 0) {
      throw new NotFoundException(`NO EXISTEN CUENTAS`);
    }
    return account;
  }
  async getById(id: string) {
    const count = await this.accountRepo.findOne({ where: { accId: id } });
    if (!count) {
      throw new NotFoundException(`CUENTA NO ENCONTRADA`);
    }
    return count;
  }
  /*   async create(body: CreateAccountDto) {
    const newCount = await this.accountRepo.create(body);
    return this.accountRepo.save(newCount);
  } */
}
