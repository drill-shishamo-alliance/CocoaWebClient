const express = require('express');
const moods = require('./moods.json');
const employees = require("./employees.json");
const nov11_15_moods = require('./mockMoods/nov11_15_moods.json');
const nov18_22_moods = require('./mockMoods/nov18_22_moods.json');
const nov25_29_moods = require('./mockMoods/nov25_29_moods.json');


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
  if (beginDate == 1573398000 && endDate == 1573743600) {
    res.status(200).json(nov11_15_moods);
  } else if (beginDate == 1574002800 && endDate == 1574348400) {
    res.status(200).json(nov18_22_moods);
  } else if (beginDate == 1574607600 && endDate == 1574953200) {
    res.status(200).json(nov25_29_moods);
  } else {
    res.status(200).json({});
  }
});

// 社員の情報を返す
app.get('/employees', (_, res) => {
  res.status(200).json(employees);
})

app.listen(port_number, () => console.log('Listening on Port' + port_number));
