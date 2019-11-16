const express = require('express');
const moods = require('./moods.json');
// const september_mood = require("./september_mood_input_logs.json");
const octorber_mood = require("./october_mood_input_logs.json");
const employees = require("./employees.json");

const app = express();
const port_number = 8000;

// CORS対策
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// このアプリにて使用する気分の情報を返す
app.get('/moods', (_, res) => {
  res.status(200).json(moods);
});

app.get('/', (_, res) => res.send('Cocoa mock server'));

// 社員の気分入力情報を、飛んできた年と月のクエリを元に値を返す
app.get('/listMoodOfEmployee', (req, res) => {
  const beginDate = req.query.beginDate;
  const endDate = req.query.endDate;
  console.log(beginDate);
  console.log(endDate);
  res.status(200).json(octorber_mood);
});

// 社員の情報を返す
app.get('/employees', (_, res) => {
  res.status(200).json(employees);
})

app.listen(port_number, () => console.log('Listening on Port' + port_number));
