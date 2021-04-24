import mongoose, { Schema } from 'mongoose';
import { IMeeting } from '../Interfaces/IMeeting';

const ScheduleOptions:Array<String> = ['HORARIO 1', 'HORARIO 2', 'HORARIO 3'];

const MeetingSchema:Schema = new Schema({
  form: { type: String, trim: true, required: [true, 'Form code is required'] },
  fullname: { type: String, trim: true, required: [true, 'Fullname is required'] },
  meeting: { type: String, enum: ScheduleOptions, required: [true, 'Meeting is required'] },
  phone: { type: String, trim: true, required: [true, 'Phone is required'] },
  email: { type: String, trim: true },
  studentId: {
    type: mongoose.Types.ObjectId, trim: true, required: [true, 'StudentId is required'], ref: 'Student',
  },
});

export default mongoose.model<IMeeting>('Meeting', MeetingSchema);
