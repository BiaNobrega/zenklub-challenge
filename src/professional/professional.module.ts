import { Module } from '@nestjs/common';
import { ProfessionalController } from '@professional/professional.controler';

@Module({
  controllers: [ProfessionalController]
})
export class ProfessionalModule {}
