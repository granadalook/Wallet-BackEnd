import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aplication } from '../../entity/aplication.entity';

@Injectable()
export class AplicationService {
  constructor(
    @InjectRepository(Aplication)
    private aplicationRepo: Repository<Aplication>,
  ) {}
}
