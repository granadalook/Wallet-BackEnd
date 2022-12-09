import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MovementService } from '../../services/movement/movement.service';
@ApiTags('MOVEMENT')
@Controller('movement')
export class MovementController {
  constructor(private movimientoService: MovementService) {}
  @Get()
  @ApiOperation({
    summary: 'TRAE TODOS LOS  MOVIMIENTOS ',
    description:
      'Trae  todos los movimientos que esten registrados en la base de datos',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve todos los movimientos',
  })
  getAll() {
    return this.movimientoService.getAll();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'TRAE UN  MOVIMIENTO POR EL ID',
    description: ' Trae el  movimiento relacionado por el id',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve un movimiento',
  })
  getById(@Param('id', ParseUUIDPipe) id: string) {
    return this.movimientoService.getById(id);
  }
}
