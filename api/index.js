import express from 'express';
/* import sharp from 'sharp'; */

const app = express();
app.use(express.json());

app.post('/upload', (req, res) => {
  console.log(req.body);
  /* res.status(200).json({
    file: req.files,
  }); */
  res.send('recieved your request!');
});

module.exports = app;
