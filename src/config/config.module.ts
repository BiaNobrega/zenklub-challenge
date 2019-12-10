import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config.service';
import { MongooseConfigService } from './database/mongoose.config.service';

@Global()
@Module({
  imports: [MongooseModule.forRootAsync({
    useClass: MongooseConfigService
  })],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
