import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MovementService } from '../../services/movement/movement.service';
import { CreateMovementDto } from '../../dto/movemet.dto';
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
  @Post()
  @ApiOperation({
    summary: 'CREA UN NUEVO MOVIMIENTO',
    description: 'Crea un nuevo movimiento deacuerdo con el dto',
  })
  @ApiResponse({
    status: 201,
    description: 'Crea un nuevo movimiento',
  })
  createClient(@Body() body: CreateMovementDto) {
    return this.movimientoService.create(body);
  }
}
