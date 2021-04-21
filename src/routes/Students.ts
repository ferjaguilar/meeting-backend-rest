import { Router, Request, Response } from 'express';
import StudentsModel from '../models/Students';

const router = Router();

router.get('/get-student/:code', async (req: Request, res: Response):Promise<Response> => {
  const { code } = req.params;
  try {
    const studentDB = await StudentsModel.findOne({ code });
    if (!studentDB) return res.status(200).json({ message: 'Student code not found' });
    if (studentDB.completed) return res.status(200).json({ message: 'Registered Student' });
    return res.status(200).json(studentDB);
  } catch (error) {
    return res.status(400).json({ message: 'Error get-student/:code', error });
  }
});

module.exports = router;
