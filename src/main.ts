import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { EnvConfig } from './config/enums/config.enum';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const configService: ConfigService = app.get(ConfigService);

  await app.listen(configService.getEnvConfig(EnvConfig.Port));
  logger.log(`App is running at http://${configService.getEnvConfig(EnvConfig.Host)}:${configService.getEnvConfig(EnvConfig.Port)} in ${process.env.NODE_ENV} mode`);
}

bootstrap();
