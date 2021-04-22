import { Router, Request, Response } from 'express';
import MeetingModel from '../models/Meeting';
import StudentsModel from '../models/Students';

const router = Router();

router.post('/add-meeting', async (req:Request, res:Response) => {
  const { body } = req;
  try {
    const meetingDB = await MeetingModel.create(body);
    await StudentsModel.findByIdAndUpdate(meetingDB._id, { completed: true }, { new: true });
    return res.status(201).json(meetingDB);
  } catch (error) {
    return res.status(400).json({ message: 'Error /add-meeting', error });
  }
});

module.exports = router;
