import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountService } from '../../services/account/account.service';
import { CreateAccountDto } from '../../dto/account.dto';
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

  /* @Post()
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
  } */
}
