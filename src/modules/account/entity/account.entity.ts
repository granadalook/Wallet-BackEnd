import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'clientid' })
  clientId: string;
  @Column()
  balance: number;
  @Column()
  credit: number;
  @Column()
  state: number;
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @DeleteDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  deleteAt: Date;
}
