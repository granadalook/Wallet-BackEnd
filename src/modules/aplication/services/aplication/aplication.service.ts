import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppDto, UpdateAppDto } from '../../dto/aplication.dto';
import { App } from '../../entity/App';

@Injectable()
export class AplicationService {
  constructor(
    @InjectRepository(App)
    private aplicationRepo: Repository<App>,
  ) {}

  async getById(id: string) {
    const aplication = await this.aplicationRepo.findOne({
      where: { cliId: id },
    });
    if (!aplication) {
      throw new NotFoundException(`Cliente no encontrado`);
    }
    return aplication;
  }

  async create(body: CreateAppDto) {
    const apli = await this.aplicationRepo.create(body);
    return this.aplicationRepo.save(apli);
  }
  async update(id: string, changes: UpdateAppDto) {
    const updateApp = await this.getById(id);
    updateApp.appUpdatedAt = new Date();
    this.aplicationRepo.merge(updateApp, changes);
    return this.aplicationRepo.save(updateApp);
  }
}
