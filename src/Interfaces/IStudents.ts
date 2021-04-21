import { Document } from 'mongoose';

export interface IStudents extends Document {
  name: String;
  lastname: String;
  code: String;
  career: String;
  status: Boolean;
}
