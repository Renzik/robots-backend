import { Schema, model } from 'mongoose';

const robotSchema = new Schema({
  name: String,
  fuelType: String,
  fuelLevel: Number,
  imageUrl: String,
});

export const Robot = model('Robot', robotSchema);
