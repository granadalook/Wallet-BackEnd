import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateMovementDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ description: 'NUMERO DE CUENTA DE INGRESO' })
  readonly accIdIncome: string;
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ description: 'NUMERO DE CUENTA DE SALIDA' })
  readonly accIdOutcome: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'RAZON DEL MOVIMIENTO' })
  readonly movReason: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'MONTO DEL MOVIMIENTO' })
  readonly movAmount: string;
  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: '???' })
  readonly movFees: number;
}
export class UpdateMovementDto extends PartialType(CreateMovementDto) {}
