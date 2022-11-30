import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'aplication' })
export class Aplication {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'clientid' })
  clientId: string;
  @Column({ name: 'aplicationcolor' })
  aplicationColor: string;
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
}
