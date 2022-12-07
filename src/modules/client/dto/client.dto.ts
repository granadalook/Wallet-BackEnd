import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'NOMBRE DEL CLIENTE' })
  readonly cliFullName: string;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'EMAIL DEL CLIENTE' })
  readonly cliEmail: string;
  @IsPhoneNumber('CO')
  @IsNotEmpty()
  @ApiProperty({ description: 'TELEFONO DEL CLIENTE' })
  readonly cliPhone: string;
  @IsNotEmpty()
  @ApiProperty({ description: 'FOTO DEL CLIENTE' })
  readonly cliPhoto: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'ESTADO  DEL CLIENTE' })
  readonly cliState: number;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}
