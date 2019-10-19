// expressモジュールを読み込む
const express = require('express');
const september_mood = require("./september_mood.json");
const octorber_mood = require("./october_mood.json");

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

app.get('/', (req, res) => res.json(september_mood));

app.get('/employees', (req, res) => {
  const year = req.query.year;
  const month = req.query.month;
  console.log('employees')
  console.log(year)
  console.log(month)
  if (year == 2019 && month == 9) {
    res.json(september_mood);
  } else if (year == 2019 && month == 10) {
    res.json(octorber_mood);
  }
});

app.listen(8000, () => console.log('Listening on Port 8000'));
