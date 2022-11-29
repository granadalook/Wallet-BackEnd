import { Module } from '@nestjs/common';
import { AccountModule } from 'src/modules/account/account.module';
import { AplicationModule } from 'src/modules/aplication/aplication.module';
import { ClientModule } from 'src/modules/client/client.module';
import { MovementModule } from 'src/modules/movement/movement.module';
import { TokenModule } from 'src/modules/token/token.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AccountModule,
    ClientModule,
    MovementModule,
    TokenModule,
    AplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
