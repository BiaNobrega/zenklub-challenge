import { Document } from 'mongoose';

export interface BookingDocument extends Document {
  professionalId: string;
  start: Date;
  finish: Date;
}
