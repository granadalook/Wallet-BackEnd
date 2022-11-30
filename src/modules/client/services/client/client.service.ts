import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../entity/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepo: Repository<Client>,
  ) {}
}
