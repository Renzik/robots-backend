import { model, Schema } from 'mongoose';

const projectSchema = new Schema({
  title: String,
  deadline: String,
  priority: Number,
  completed: Boolean,
  description: String,
});

export const Project = model('Project', projectSchema);
