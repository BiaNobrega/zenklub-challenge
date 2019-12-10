import { BOOKING } from '@config/database/constants/schema-name.constant';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from '@shared/providers/repository/repository';
import { Model } from 'mongoose';
import { BookingDocument } from '../../interfaces/booking.document';

@Injectable()
export class BookingRepository extends Repository<BookingDocument> {
  constructor(
    @InjectModel(BOOKING) private readonly bookingModel: Model<BookingDocument>
  ) {
    super(bookingModel);
  }

  public findByParams(params: any) {
    const newParams = { ...params };
    if (newParams.start && newParams.finish) {
      newParams.start =
        new Date(params.finish) === new Date(params.start)
          ? { $lt: params.finish }
          : { $lte: params.finish };
      newParams.finish = { $gt: params.start };
    }
    return super.findByParams(newParams);
  }
}
