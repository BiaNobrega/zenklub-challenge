import { WeekDay } from '@availability/interfaces/availability.document';
import { AvailabilityService } from '@availability/providers/services/availability.service';
import { BookingService } from '@booking/providers/services/booking.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DateHelper } from '@shared/utils/date.helper';
import { TimeHelper } from '@shared/utils/time.helper';
import { ProfessionalSlot, Slot } from './interfaces/slot-response.interface';

@Injectable()
export class SlotService {
  constructor(
    private readonly availabilityService: AvailabilityService,
    private readonly bookingService: BookingService
  ) {}
  async get(professionalId: string, startDate: Date, finishDate: Date) {
    const dateArray = DateHelper.getDates(startDate, finishDate);
    const months: Map<number, WeekDay[]> = new Map<number, any[]>();
    const result: ProfessionalSlot[] = [];

    for (const date of dateArray) {
      const slots: Slot[] = [];
      if (!months.has(date.getMonth())) {
        const professionalAvailability = await this.availabilityService.get(
          professionalId,
          date.getMonth()
        );
        months.set(date.getMonth(), professionalAvailability[0].weekdays);
      }
      const weekDay = months
        .get(date.getMonth())
        .find(w => w.weekDay === date.getDay());

      const times: string[] = [];

      for (const availability of weekDay.availabilities) {
        times.push(
          ...TimeHelper.getTimes(availability.start, availability.finish)
        );
      }

      for (const time of times) {
        const dateHour = new Date(date);
        const splitHour = time.split(':');
        dateHour.setHours(Number(splitHour[0]), Number(splitHour[1]));

        const hasAvailability = await this.bookingService.validateBooking(
          professionalId,
          {
            start: dateHour,
            finish: dateHour
          }
        );

        slots.push({ hour: time, isAvailable: hasAvailability });
      }

      result.push({ date, slots });
    }

    if (!result || !result.length) {
      throw new NotFoundException();
    }

    return result;
  }
}
