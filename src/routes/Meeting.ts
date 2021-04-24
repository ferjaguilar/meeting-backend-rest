import { Router, Request, Response } from 'express';
import MeetingModel from '../models/Meeting';
import StudentsModel from '../models/Students';

const router = Router();

router.post('/add-meeting', async (req:Request, res:Response):Promise<Response> => {
  const { body } = req;
  try {
    const meetingDB = await MeetingModel.create(body);
    await StudentsModel.findByIdAndUpdate(meetingDB._id, { completed: true }, { new: true });
    return res.status(201).json(meetingDB);
  } catch (error) {
    return res.status(400).json({ message: 'Error /add-meeting', error });
  }
});

router.get('/get-meetings', async (req: Request, res:Response):Promise<Response> => {
  const { limit = 5, from = 0 } = req.query;
  try {
    const meetingDB = await MeetingModel.find().populate('studentId').skip(Number(from)).limit(Number(limit));
    return res.status(200).json(meetingDB);
  } catch (error) {
    return res.status(400).json({ message: 'Error /get-meetings', error });
  }
});

module.exports = router;
