import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

const database = async () => {
  try {
    await mongoose.connect(String(process.env.MONGODB_URI), config);
    console.log('Mongodb connected');
  } catch (error) {
    throw new Error(`Something failed in mongodb ${error}`);
  }
};

export default database;
