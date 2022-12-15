import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto, UpdateAccountDto } from '../../dto/account.dto';
import { Account } from '../../entity/Account';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepo: Repository<Account>,
  ) {}

  async getAll(): Promise<Array<Account>> {
    console.log('weppa');
    const account = await this.accountRepo.find();
    if (account.length === 0) {
      throw new NotFoundException(`NO EXISTEN CUENTAS`);
    }
    return account;
  }
  async getById(id: string) {
    const count = await this.accountRepo.findOne({
      where: { accId: id },
    });
    if (!count) {
      throw new NotFoundException(`CUENTA NO ENCONTRADA`);
    }
    return count;
  }
  async getByClientId(id: string) {
    const count = await this.accountRepo.findOne({ where: { cliId: id } });
    if (!count) {
      throw new NotFoundException(`CUENTA NO ENCONTRADA`);
    }
    return count;
  }
  async create(body: CreateAccountDto) {
    const newCount = await this.accountRepo.create(body);
    return this.accountRepo.save(newCount);
  }
  async delete(id: string) {
    const accountDelete = await this.getById(id);
    accountDelete.accState = 0;
    accountDelete.accDeletedAt = new Date();
    return this.accountRepo.save(accountDelete);
  }
  async update(id: string, changes: UpdateAccountDto) {
    const updateAccount = await this.getById(id);
    updateAccount.accUpdatedAt = new Date();
    this.accountRepo.merge(updateAccount, changes);
    return this.accountRepo.save(updateAccount);
  }
}
