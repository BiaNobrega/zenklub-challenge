import { AvailabilityModule } from '@availability/availability.module';
import { BookingModule } from '@booking/booking.module';
import { ConfigModule } from '@config/config.module';
import { Module } from '@nestjs/common';
import { SlotModule } from './slot/slot.module';
@Module({
  imports: [ConfigModule, AvailabilityModule, BookingModule, SlotModule]
})
export class AppModule {}
