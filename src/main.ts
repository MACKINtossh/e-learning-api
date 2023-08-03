import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as fs from 'fs';

// Check if .env.local exists, if so, load it. Otherwise, load .env
const envFile = fs.existsSync('.env.local') ? '.env.local' : '.env';
dotenv.config({ path: envFile });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // the address of the front-end application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Amesite e-learning API')
    .setDescription('The API description for Amesite e-learning platform')
    .setVersion('1.0')
    .addTag('e-learning')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
