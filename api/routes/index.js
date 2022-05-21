import express from 'express';
/* import auth from './auth.route'; */

const router = express.Router();

const g = router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Ok',
  });
});

router.use('/auth', g);

export default router;
