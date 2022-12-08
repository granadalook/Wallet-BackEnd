import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ description: 'ID DEL CLIENTE' })
  readonly cliId: string;
  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: 'BALANCE DE LA CUENTA' })
  readonly accBalance: string;
  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: 'CREDITO DE LA CUENTA' })
  readonly accCredit: string;
  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: 'ESTADO  DE LA CUENTA' })
  readonly accState: number;
}
export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
