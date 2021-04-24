import { Document, Types } from 'mongoose';

export interface IMeeting extends Document {
  form: String;
  fullname: String;
  meeting: String;
  phone: String;
  email?: String;
  studentId: Types.ObjectId;
}
