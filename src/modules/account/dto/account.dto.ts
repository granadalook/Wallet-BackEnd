import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ description: 'ID DEL CLIENTE' })
  readonly clientId: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'BALANCE DE LA CUENTA' })
  readonly balance: number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'CREDITO DE LA CUENTA' })
  readonly credit: number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'ESTADO  DE LA CUENTA' })
  readonly state: number;
}
