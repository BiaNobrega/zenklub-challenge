import { ConfigService } from '@config/config.service';
import { EnvConfig } from '@config/enums/config.enum';
import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService
        .getEnvConfig(EnvConfig.MongoUri)
        .replace('$password', process.env.MONGO_PASSWORD),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    };
  }
}
