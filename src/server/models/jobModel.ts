import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  dateApplied: { type: Date, required: true },
  status: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String },
});

export default mongoose.model('job', jobSchema);