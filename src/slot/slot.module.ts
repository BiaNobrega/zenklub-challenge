import { AvailabilityModule } from '@availability/availability.module';
import { BookingModule } from '@booking/booking.module';
import { Module } from '@nestjs/common';
import { SlotController } from './slot.controller';
import { SlotService } from './slot.service';

@Module({
  imports: [AvailabilityModule, BookingModule],
  controllers: [SlotController],
  providers: [SlotService]
})
export class SlotModule {}
