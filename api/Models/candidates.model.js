import { Schema, model } from 'mongoose';

const candidateSchema = new Schema(
  {
    name: String,
    number: Number,
    vote: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const candidateModel = model('candidate', candidateSchema);
