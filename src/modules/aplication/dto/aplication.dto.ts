import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID, IsString } from 'class-validator';

export class CreateAppDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ description: 'ID DEL CLIENTE' })
  readonly cliId: string;
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'COLOR DE LA APLICACION' })
  readonly appColor: string;
}
export class UpdateAppDto extends PartialType(CreateAppDto) {}
