import { AvailabilityService } from '@availability/providers/services/availability.service';
import { BookingDto } from '@booking/dtos/booking.dto';
import { BookingDocument } from '@booking/interfaces/booking.document';
import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { BookingRepository } from '../repositories/booking.repository';

@Injectable()
export class BookingService {
  constructor(
    private readonly bookingRepository: BookingRepository,
    private readonly availabilityService: AvailabilityService
  ) {}
  async create(professionalId: string, booking: BookingDto) {
    const SESSION_DURATION = 1;
    if (booking.finish) {
      booking.finish = new Date(booking.start);
      booking.finish.setHours(booking.finish.getHours() + SESSION_DURATION);
    }
    const startDate = new Date(booking.start);
    const finishDate = new Date(booking.finish);

    const result = await Promise.all([
      this.availabilityService.validateAvailability(
        professionalId,
        startDate.getMonth(),
        startDate.getDay(),
        startDate.toISOString().substr(11, 5),
        finishDate.toISOString().substr(11, 5)
      ),
      this.validateBooking(professionalId, booking)
    ]);

    if (!result[0] || !result[1]) {
      Logger.error('Date not available.', null, AvailabilityService.name);
      throw new ConflictException('Date not available.');
    }

    await this.bookingRepository.add(
      { ...booking, professionalId } as BookingDocument
    );
  }

  public async validateBooking(
    professionalId: string,
    booking: BookingDto
  ): Promise<boolean> {
    let hasAvailability: boolean = true;
    const result = await this.bookingRepository.findByParams({
      ...booking,
      professionalId
    });
    if (result && result.length) {
      hasAvailability = false;
    }
    return hasAvailability;
  }
}
