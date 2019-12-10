import { Schema, Types } from 'mongoose';

export const ProfessionalAvailabilitySchema = new Schema({
  professionalId: {
    type: Types.ObjectId,
    required: [true, 'Professional id is required.']
  },
  month: { type: Number, required: [true, 'Month is required.'] },
  weekdays: [
    new Schema(
      {
        weekDay: { type: Number, required: [true, 'Weekday is required.'] },
        availabilities: [
          new Schema(
            {
              start: {
                type: String,
                required: [true, 'Availability start is required.']
              },
              finish: {
                type: String,
                required: [true, 'Availability finish is required.']
              }
            },
            { _id: false }
          )
        ]
      },
      { _id: false }
    )
  ]
});

ProfessionalAvailabilitySchema.index(
  { professionalId: 1, month: 1 },
  { unique: true }
);
