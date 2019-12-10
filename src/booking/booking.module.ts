import { AvailabilityModule } from '@availability/availability.module';
import { BOOKING } from '@config/database/constants/schema-name.constant';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingController } from './booking.controller';
import { BookingRepository } from './providers/repositories/booking.repository';
import { BookingService } from './providers/services/booking.service';
import { BookingSchema } from './schemas/booking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BOOKING,
        schema: BookingSchema
      }
    ]),
    AvailabilityModule
  ],
  providers: [BookingRepository, BookingService],
  controllers: [BookingController],
  exports: [BookingService]
})
export class BookingModule {}
