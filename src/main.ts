import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1'); // Prefijo de url
  const config = new DocumentBuilder() // Uso de documentacion son swagger
    .setTitle('WALLET API')
    .setDescription('WALLET VIRTUAL API')
    .setVersion('1.0')
    .addTag('CLIENT', 'Modulo de clientes')
    .addTag('ACCOUNT', 'Modulo de cuentas')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docWallet', app, document);
  app.useGlobalPipes(new ValidationPipe()); //Usar clas validator de forma global
  await app.listen(3000); // Escuchando por el puerto 3000
}
bootstrap();
