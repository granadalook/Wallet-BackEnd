import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from '../../entity/client.entity';
import { CreateClientDto } from '../../dto/client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepo: Repository<Client>,
  ) {}

  async getAll() {
    const clients = await this.clientRepo.find();
    if (clients.length === 0) {
      throw new NotFoundException(`No existen clientes`);
    }
    return clients;
  }
  async getOneById(id: string) {
    const client = await this.clientRepo.findOne({
      where: { id },
    });
    if (!client) {
      throw new NotFoundException(`CLIENTE  ${id} NO ENCONTRADO`);
    }
    return client;
  }
  async getByName(name: string) {
    const client = await this.clientRepo.findOne({ where: { fullName: name } });
    if (!client) {
      throw new NotFoundException(`CLIENTE  ${name} NO ENCONTRADO`);
    }
    return client;
  }

  async create(body: CreateClientDto) {
    const newClient = await this.clientRepo.create(body);
    return this.clientRepo.save(newClient);
  }
  async delete(id: string) {
    const userDelete = await this.clientRepo.delete(id);
    return userDelete;
  }
}
