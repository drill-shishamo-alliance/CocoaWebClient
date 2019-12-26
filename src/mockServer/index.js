const express = require('express');
const moods = require('./moods.json');
const causes = require('./causes.json');
const employees = require('./employees.json');
const nov11_15_moods = require('./mockPanchedMoods/nov11_15_moods.json');
const nov18_22_moods = require('./mockPanchedMoods/nov18_22_moods.json');
const nov25_29_moods = require('./mockPanchedMoods/nov25_29_moods.json');
const oct_moods = require('./mockPanchedMoods/oct_moods.json');
const nov_moods = require('./mockPanchedMoods/nov_moods.json');

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

app.get('/causes', (_, res) => {
  res.status(200).json(causes);
});

app.get('/', (_, res) => res.send('Cocoa mock server'));

// 社員の気分入力情報を、飛んできた年と月のクエリを元に値を返す
app.get('/listMoodOfEmployee', (req, res) => {
  const begin_date = req.query.begin_date;
  const end_date = req.query.end_date;
  console.log('begin_date:' + begin_date);
  console.log('end_date:' + end_date);
  if (begin_date == 1573398000 && end_date == 1573743600) {
    res.status(200).json(nov11_15_moods);
  } else if (begin_date == 1574002800 && end_date == 1574348400) {
    res.status(200).json(nov18_22_moods);
  } else if (begin_date == 1574607600 && end_date == 1574953200) {
    res.status(200).json(nov25_29_moods);
  } else if (begin_date == 1569855600 && end_date == 1572447600) {
    res.status(200).json(oct_moods);
  } else if (begin_date == 1572534000 && end_date == 1575039600) {
    res.status(200).json(nov_moods);
  } else {
    res.status(200).json({});
  }
});

// 社員の情報を返す
app.get('/employees', (_, res) => {
  res.status(200).json(employees);
});

app.listen(port_number, () => console.log('Listening on Port' + port_number));
