import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Hospital Microservice API')
    .setDescription(
      'The API to manage hospital appointments, patients and doctors.',
    )
    .setVersion('3.0')
    .addTag('appointments', 'Operations related to appointments')
    .addTag('patients', 'Operations related to patients')
    .addTag('doctors', 'Operations related to doctors')
    .addServer('http://localhost:3000', 'Local server')
    .addServer(
      'https://hospital-microservice.onrender.com',
      'Production server',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
