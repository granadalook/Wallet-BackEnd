import { NestFactory } from '@nestjs/core';
import { AppModule } from './Main/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000); // Escuchando por el puerto 4000
}
bootstrap();
