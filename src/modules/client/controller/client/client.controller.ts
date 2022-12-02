import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientService } from '../../services/client/client.service';
import { CreateClientDto } from '../../dto/client.dto';

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
}
