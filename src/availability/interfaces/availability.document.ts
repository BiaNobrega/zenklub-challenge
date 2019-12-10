import { Document } from 'mongoose';

export interface ProfessionalAvailability extends Document {
  professionalId: string;
  month: number;
  weekdays: WeekDay[];
}

export interface WeekDay {
  weekDay: number;
  availabilities: Availability [];
}

export interface Availability {
  start: string;
  finish: string;
}
