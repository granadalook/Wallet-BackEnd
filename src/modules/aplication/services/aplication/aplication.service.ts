import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { App } from '../../entity/App';

@Injectable()
export class AplicationService {
  constructor(
    @InjectRepository(App)
    private aplicationRepo: Repository<App>,
  ) {}
}
