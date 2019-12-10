import { Schema, Types } from 'mongoose';

export const BookingSchema = new Schema({
  professionalId: {
    type: Types.ObjectId,
    required: [true, 'Professional id is required.']
  },
  start: { type: Date, required: [true, 'Start is required.']},
  finish: { type: Date, required: [true, 'Finish is required.']}
});
