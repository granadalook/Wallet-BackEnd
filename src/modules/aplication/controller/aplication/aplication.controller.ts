import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AplicationService } from '../../services/aplication/aplication.service';
import { CreateAppDto, UpdateAppDto } from '../../dto/aplication.dto';
@ApiTags('APLICATION')
@Controller('aplication')
export class AplicationController {
  constructor(private appService: AplicationService) {}
  @Post()
  @ApiOperation({
    summary: 'CREA UN  CAMBIO DE APLICACION EN EL FRONT',
    description: 'Cambia de color la aplicacion',
  })
  @ApiResponse({
    status: 201,
    description: 'Cambia de color la aplicacion',
  })
  createClient(@Body() body: CreateAppDto) {
    return this.appService.create(body);
  }
  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'EDITA EL COLOR DE LA APP',
    description: 'Edita el color de la aplicacion',
  })
  @ApiResponse({
    status: 202,
    description: 'Edita el color de la aplicacion',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() changes: UpdateAppDto,
  ) {
    return this.appService.update(id, changes);
  }
}
