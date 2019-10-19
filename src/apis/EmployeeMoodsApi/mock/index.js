// expressモジュールを読み込む
const express = require('express');
const moods = require('./moods.json');
const september_mood = require("./september_mood_input_logs.json");
const octorber_mood = require("./october_mood_input_logs.json");

// expressアプリを作成する
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// /moods にアクセスしてきたときmood.jsonを返す
app.get('/moods', (req, res) => {
  res.status(500).json(moods);
});

app.get('/', (req, res) => res.send('Cocoa mock server'));

// 社員の気分入力情報を、飛んできた年と月のクエリを元に値を返す
app.get('/moodInputLog', (req, res) => {
  const year = req.query.year;
  const month = req.query.month;
  if (year == 2019 && month == 9) {
    res.status(500).json(september_mood);
  } else if (year == 2019 && month == 10) {
    res.status(500).json(octorber_mood);
  }
});

app.listen(8000, () => console.log('Listening on Port 8000'));
