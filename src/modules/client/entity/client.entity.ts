import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'fullname' })
  fullName: string;
  @Column()
  email: string;
  @Column()
  phone: string;
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
