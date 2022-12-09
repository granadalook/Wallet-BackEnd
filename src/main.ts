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
    .addTag('MOVEMENT', 'Modulo de movimientos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docWallet', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
