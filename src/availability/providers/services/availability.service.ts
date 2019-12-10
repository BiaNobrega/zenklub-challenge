import { AvailabilityIdDto } from '@availability/dtos/availability-id.dto';
import { ProfessionalAvailabilityDto } from '@availability/dtos/professional-availability.dto';
import { ProfessionalAvailability } from '@availability/interfaces/availability.document';
import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException
} from '@nestjs/common';
import { AvailabilityRepository } from '../repository/availability.repository';

@Injectable()
export class AvailabilityService {
  constructor(
    private readonly availabilityRepository: AvailabilityRepository
  ) {}

  async get(professionalId: string, month?: number) {
    const result = await this.availabilityRepository.findByParams({
      professionalId,
      month
    });
    if (!result || !result.length) {
      throw new NotFoundException();
    }
    return result;
  }

  async create(
    professionalId: string,
    availabilityDto: ProfessionalAvailabilityDto
  ) {
    return await this.availabilityRepository.add(
      {
        ...availabilityDto,
        professionalId
      } as ProfessionalAvailability
    );
  }

  async update(
    availabilityIdDto: AvailabilityIdDto,
    availabilityDto: ProfessionalAvailabilityDto
  ) {
    const result = await this.availabilityRepository.update(
      availabilityIdDto.id,
      {
        ...availabilityDto,
        professionalId: availabilityIdDto.professionalId
      } as ProfessionalAvailability
    );
    if (!result || result.n <= 0) {
      throw new NotFoundException();
    }
  }

  async remove(id: string) {
    const result = await this.availabilityRepository.remove(id);
    if (!result || result.deletedCount <= 0) {
      throw new NotFoundException();
    }
  }

  async validateAvailability(
    professionalId: string,
    month: number,
    weekDay: number,
    start: string,
    finish: string
  ) {
    try {
      let hasAvailability: boolean = false;
      const result = await this.availabilityRepository.findByParams({
        professionalId,
        month
      });

      const weekDays = result[0].weekdays.find(w => w.weekDay === weekDay);

      const startNumber = Number(start.replace(':', ''));
      const finishNumber = Number(finish.replace(':', ''));

      const availabilities = weekDays.availabilities.find(availability => {
        const availabilityStart = Number(availability.start.replace(':', ''));
        const availabilityFinish = Number(availability.finish.replace(':', ''));

        return (
          availabilityStart <= startNumber &&
          availabilityStart < finishNumber &&
          availabilityFinish > startNumber &&
          availabilityFinish >= finishNumber
        );
      });

      if (availabilities) {
        hasAvailability = true;
      }
      return hasAvailability;
    } catch (error) {
      Logger.error('Date not available.', null, AvailabilityService.name);
      throw new ConflictException('Date not available.');
    }
  }
}
