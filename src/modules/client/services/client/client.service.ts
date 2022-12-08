import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client as ClientePg } from 'pg';
import { Client } from '../../entity/Client';
import { CreateClientDto, UpdateClientDto } from '../../dto/client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepo: Repository<Client>,
    @Inject('PG') private clientePg: ClientePg,
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
      where: { cliId: id },
    });
    if (!client) {
      throw new NotFoundException(`CLIENTE  ${id} NO ENCONTRADO`);
    }
    return client;
  }
  async getByName(name: string) {
    const client = await this.clientRepo.findOne({
      where: { cliFullName: name },
    });
    if (!client) {
      throw new NotFoundException(`CLIENTE  ${name} NO ENCONTRADO`);
    }
    return client;
  }
  async create(body: CreateClientDto) {
    console.log('creo service');
    const newClient = await this.clientRepo.create(body);
    return this.clientRepo.save(newClient);
  }
  async delete(id: string) {
    const deleteClient = await this.getOneById(id);
    deleteClient.cliState = 0;
    deleteClient.cliDeletedAt = new Date();
    return this.clientRepo.save(deleteClient);
  }
  async selectSql() {
    return new Promise((resolve, rejects) => {
      this.clientePg.query('SELECT * FROM client', (err, res) => {
        if (err) {
          rejects(err);
        }
        resolve(res);
      });
    });
  }
  async update(id: string, changes: UpdateClientDto) {
    const editCliente = await this.getOneById(id);
    editCliente.cliUpdatedAt = new Date();
    this.clientRepo.merge(editCliente, changes);
    return this.clientRepo.save(editCliente);
  }
}
