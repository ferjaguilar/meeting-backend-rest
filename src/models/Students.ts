import mongoose, { Schema } from 'mongoose';
import { IStudents } from '../Interfaces/IStudents';

const StudentSchema:Schema = new Schema({
  name: { type: String, trim: true, required: [true, 'Name is required'] },
  lastname: { type: String, trim: true, required: [true, 'Lastname is required'] },
  code: { type: String, trim: true, required: [true, 'Code is required'] },
  career: { type: String, trim: true, required: [true, 'Career is required'] },
  status: { type: Boolean, default: false },
});

export default mongoose.model<IStudents>('Student', StudentSchema);
