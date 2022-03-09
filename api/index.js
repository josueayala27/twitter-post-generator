import express from 'express';
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', (req, res) => {
  try {
    res.json(
      {
        message: req.body,
      },
      200
    );
  } catch (message) {
    res.json(
      {
        error: true,
        message,
      },
      500
    );
  }
});

module.exports = app;
