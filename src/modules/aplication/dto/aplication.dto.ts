import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class createAplicationDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ description: 'ID DEL CLIENTE' })
  readonly clientId: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'COLOR DE LA APLICACION' })
  readonly color: string;
}
