import { Router, Request, Response } from 'express';

const router = Router();

router.get('/get-student', (req: Request, res: Response):void => {
  res.send('Running');
});

module.exports = router;
