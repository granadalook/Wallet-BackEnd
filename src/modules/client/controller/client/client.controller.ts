import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientService } from '../../services/client/client.service';
import { CreateClientDto, UpdateClientDto } from '../../dto/client.dto';

@ApiTags('CLIENT')
@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  @ApiOperation({
    summary: 'TRAE TODOS LOS CLIENTS ',
    description:
      'Trae  todos los clientes que esten registrados en la base de datos',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve todos los clientes',
  })
  getAllClients() {
    return this.clientService.getAll();
  }
  @Get('sql')
  @ApiOperation({
    summary: 'TRAE TODOS LOS CLIENTS POR CONSULTA DIRECTA SQL',
    description: 'Trae  todos los clientes por cunsulta directa  sin ORM',
  })
  getSeletSql() {
    return this.clientService.selectSql();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'TRAE UN CLIENTE POR EL ID',
    description:
      'Trae  un cliente  por el id, tener en cuenta  que el id es de tipo UUID V4',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve un cliente  por el id',
  })
  getOneClient(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientService.getOneById(id);
  }
  @Get('nombre/:nombre')
  @ApiOperation({
    summary: 'TRAE UN CLIENTE POR EL NOMBRE',
    description: 'Trae  un cliente  por el nombre',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve un cliente  por el nombre',
  })
  getByName(@Param('nombre') nombre: string) {
    return this.clientService.getByName(nombre);
  }
  @Post()
  @ApiOperation({
    summary: 'CREA UN NUEVO CLIENTE',
    description: 'Crea un nuevo cliente deacuerdo con el dto',
  })
  @ApiResponse({
    status: 201,
    description: 'Crea un nuevo cliente',
  })
  createClient(@Body() body: CreateClientDto) {
    return this.clientService.create(body);
  }
  @ApiOperation({
    summary: 'ELIMINA UN CLIENTE',
    description: 'Elimina un cliente de la base de datos "BORRADO LOGICO"',
  })
  @ApiResponse({
    status: 200,
    description: 'Borrar Cliente',
  })
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientService.delete(id);
  }
  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'EDITA UN CLIENTE',
    description: 'Edita un cliente  bajo   sus propiedades editables',
  })
  @ApiResponse({
    status: 202,
    description: 'Edita un cliente',
  })
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() changes: UpdateClientDto,
  ) {
    return this.clientService.update(id, changes);
  }
}
