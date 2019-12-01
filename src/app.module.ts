import { ConfigModule } from '@config/config.module';
import { Module } from '@nestjs/common';
import { ProfessionalModule } from '@professional/professional.module';
@Module({
  imports: [ConfigModule, ProfessionalModule]
})
export class AppModule { }
