import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config/config';
import { DatabaseModule } from 'src/database/database.module';
import { AccountModule } from 'src/modules/account/account.module';
import { AplicationModule } from 'src/modules/aplication/aplication.module';
import { ClientModule } from 'src/modules/client/client.module';
import { MovementModule } from 'src/modules/movement/movement.module';
import { TokenModule } from 'src/modules/token/token.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'environments/.env', // desde aca lee las variables de entorno
      isGlobal: true,
      load: [config], // carga el archivo config para lecctura dewvariables
    }),
    AccountModule,
    ClientModule,
    MovementModule,
    TokenModule,
    AplicationModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
