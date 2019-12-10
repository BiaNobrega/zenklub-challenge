import { ProfessionalAvailability } from '@availability/interfaces/availability.document';
import { AVAILABILITY } from '@config/database/constants/schema-name.constant';
import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from '@shared/providers/repository/repository';
import { Model } from 'mongoose';

@Injectable({ scope: Scope.DEFAULT })
export class AvailabilityRepository extends Repository<
  ProfessionalAvailability
> {
  constructor(
    @InjectModel(AVAILABILITY)
    private readonly availabilityModel: Model<ProfessionalAvailability>
  ) {
    super(availabilityModel);
  }
}
