import { AVAILABILITY } from '@config/database/constants/schema-name.constant';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AvailabilityController } from './availability.controler';
import { AvailabilityRepository } from './providers/repository/availability.repository';
import { AvailabilityService } from './providers/services/availability.service';
import { ProfessionalAvailabilitySchema } from './schemas/availability.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AVAILABILITY,
        schema: ProfessionalAvailabilitySchema
      }
    ])
  ],
  providers: [AvailabilityRepository, AvailabilityService],
  controllers: [AvailabilityController],
  exports: [AvailabilityService]
})
export class AvailabilityModule {}
