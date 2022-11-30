import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../../entity/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepo: Repository<Account>,
  ) {}
}
