import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client as ClientePg } from 'pg';
import { Client } from '../../entity/Client';
import { CreateClientDto, UpdateClientDto } from '../../dto/client.dto';
import { AplicationService } from '../../../aplication/services/aplication/aplication.service';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepo: Repository<Client>,
    @Inject('PG') private clientePg: ClientePg,
    private aplicationService: AplicationService,
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
      relations: ['account', 'app'],
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
    const newClient = await this.clientRepo.create(body);
    const client = await this.clientRepo.save(newClient);
    this.aplicationService.create({ cliId: client.cliId, appColor: 'blue' });
    return client;
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
