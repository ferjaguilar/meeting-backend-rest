import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import database from './database';

const app = express();
dotenv.config({ path: './.env' });

// Settings
app.set('port', process.env.PORT);

// Middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// Routes
app.use('/api', require('./routes/Students'));

const main = async () => {
  try {
    await app.listen(app.get('port'));
    console.log(`Server running on port ${app.get('port')}`);
    database();
  } catch (error) {
    throw new Error(`Someting failed ${error}`);
  }
};

main();
