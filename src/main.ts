import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './Main/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1'); // Prefijo de url
  const config = new DocumentBuilder() // Uso de documentacion son swagger
    .setTitle('WALLET API')
    .setDescription('WALLET VIRTUAL API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docWallet', app, document);
  app.useGlobalPipes(new ValidationPipe()); //Usar clas validator de forma global
  await app.listen(4000); // Escuchando por el puerto 4000
}
bootstrap();
