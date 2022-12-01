import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientService } from '../../services/client/client.service';
@ApiTags('CLIENT')
@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  @ApiOperation({ summary: 'TRAE TODOS LOS CLIENTS ' })
  getAllClients() {
    return this.clientService.getAllClients();
  }
}
