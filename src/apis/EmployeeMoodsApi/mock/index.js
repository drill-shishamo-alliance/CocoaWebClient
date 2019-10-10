// expressモジュールを読み込む
const express = require('express');

// expressアプリを作成する
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// /moods にアクセスしてきたときmood.jsonを返す
app.get('/moods', (req, res) => {
  res.sendFile(__dirname + '/mood.json', err => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log('sending completed');
    }
  });
});

app.get('/employees', (req, res) => {
  const year = req.query.year;
  const month = req.query.month;

  if (year === 2019 && month === 9) {
    res.sendFile(__dirname + '/september_mood.json', err => {
      if (err) {
        res.sendStatus(400);
      } else {
        console.log('9month sending completed');
      }
    });
  } else if (year === 2019 && month === 10) {
    res.sendFile(__dirname + '/octorber_mood.json', err => {
      if (err) {
        res.sendStatus(400);
      } else {
        console.log('10month sending completed');
      }
    });
  }
});

app.listen(8000, () => console.log('Listening on Port 8000'));
