import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './Main/app.controller';
import { AppService } from './Main/app.service';
import { AccountModule } from './modules/account/account.module';
import { AplicationModule } from './modules/aplication/aplication.module';
import { ClientModule } from './modules/client/client.module';
import { MovementModule } from './modules/movement/movement.module';
import { TokenModule } from './modules/token/token.module';

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
