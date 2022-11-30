import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class Movement {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'accountidin' })
  accIdIn: string;
  @Column({ name: 'accountidou' })
  accIdOu: string;
  @Column()
  reason: string;
  @Column()
  amount: number;
  @Column()
  fees: number;
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  movementAt: Date;
}
