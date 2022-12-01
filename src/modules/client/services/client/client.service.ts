import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../../entity/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepo: Repository<Client>,
  ) {}

  async getAllClients() {
    const clients = await this.clientRepo.find();
    if (clients.length === 0) {
      throw new NotFoundException(`No existen clientes`);
    }
    return clients;
  }
}
