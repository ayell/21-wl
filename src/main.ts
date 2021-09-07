import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
  await NestFactory.createApplicationContext(AppModule);
};
bootstrap();
