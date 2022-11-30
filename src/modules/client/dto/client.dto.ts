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
  readonly name: string;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'EMAIL DEL CLIENTE' })
  readonly email: string;
  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'TELEFONO DEL CLIENTE' })
  readonly phone: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'ESTADO  DEL CLIENTE' })
  readonly state: number;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}
