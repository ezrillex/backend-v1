import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // todo cors disable with env variable (is it possible at this stage?)
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
