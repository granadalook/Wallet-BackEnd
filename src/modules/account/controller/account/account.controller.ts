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
import { AccountService } from '../../services/account/account.service';
import { CreateAccountDto, UpdateAccountDto } from '../../dto/account.dto';
@ApiTags('ACCOUNT')
@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}
  @Get()
  @ApiOperation({
    summary: 'TRAE TODAS LAS CUENTAS ',
    description:
      'Trae  todos las cuentas que esten registrados en la base de datos',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve todas las cuentas',
  })
  getall() {
    return this.accountService.getAll();
  }
  @Get(':id')
  @ApiOperation({
    summary: 'TRAE  LA CUENTA POR EL ID ',
    description: 'Trea una  cuenta   por el id',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve la cuenta encontrada',
  })
  getOneClient(@Param('id', ParseUUIDPipe) id: string) {
    return this.accountService.getById(id);
  }
  @Get('clienteId/:id')
  @ApiOperation({
    summary: 'TRAE  LA CUENTA POR EL ID DEL CLIENTE ',
    description: 'Trea una  cuenta   por el id del cliente',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve la cuenta relacionada el cliente',
  })
  getByClientId(@Param('id', ParseUUIDPipe) id: string) {
    return this.accountService.getByClientId(id);
  }

  @Post()
  @ApiOperation({
    summary: 'CREA UNA NUEVA CUENTA ',
    description: 'Crea una cuenta y la registra en la base de datos',
  })
  @ApiResponse({
    status: 201,
    description: 'Crea una nueva cuenta',
  })
  createClient(@Body() body: CreateAccountDto) {
    return this.accountService.create(body);
  }
  @ApiOperation({
    summary: 'ELIMINA UNA CUENTA',
    description: 'Elimina una cuenta de la base de datos "BORRADO LOGICO"',
  })
  @ApiResponse({
    status: 200,
    description: 'Borrar una cuenta',
  })
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.accountService.delete(id);
  }
  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'EDITA UNA CUENTA',
    description: 'Edita una cuenta  bajo   sus propiedades editables',
  })
  @ApiResponse({
    status: 202,
    description: 'Edita una cuenta',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() changes: UpdateAccountDto,
  ) {
    return this.accountService.update(id, changes);
  }
}
