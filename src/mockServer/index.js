// expressモジュールを読み込む
const express = require('express');
const moods = require('./moods.json');
const september_mood = require("./september_mood_input_logs.json");
const octorber_mood = require("./october_mood_input_logs.json");
const employees = require("./employees.json");

// expressアプリを作成する
const app = express();
const port_number = 8000;

// CORS対策
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// このアプリにて使用する気分の情報を返す
app.get('/moods', (req, res) => {
  res.status(200).json(moods);
});

app.get('/', (req, res) => res.send('Cocoa mock server'));

// 社員の気分入力情報を、飛んできた年と月のクエリを元に値を返す
app.get('/listMoodOfEmployee', (req, res) => {
  const beginDate = req.query.beginDate;
  const endDate = req.query.endDate;
  if (year == 2019 && month == 9) {
    res.status(200).json(september_mood);
  } else if (year == 2019 && month == 10) {
    res.status(200).json(octorber_mood);
  }
});

app.get('/employees', (req, res) => {
  res.status(200).json(employees);
})

app.listen(port_number, () => console.log('Listening on Port' + port_number));
