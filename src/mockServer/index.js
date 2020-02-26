const express = require('express');
const jan6_10_department_moods = require('./mockDepartmentMoods/jan6_10_department_moods.json');
const jan13_17_department_moods = require('./mockDepartmentMoods/jan13_17_department_moods.json');
const jan20_24_department_moods = require('./mockDepartmentMoods/jan20_24_department_moods.json');
const jan27_31_department_moods = require('./mockDepartmentMoods/jan27_31_department_moods.json');
const jan_department_moods = require('./mockDepartmentMoods/jan_department_moods');
const departments = require('./departments.json');
const moods = require('./moodsProd.json');
const causes = require('./causesProd.json');
const employees = require('./employeesProd.json');
const nov11_15_moods = require('./mockPunchedMoodsProd/nov11_15_moods.json');
const nov18_22_moods = require('./mockPunchedMoodsProd/nov18_22_moods.json');
const nov25_29_moods = require('./mockPunchedMoodsProd/nov25_29_moods.json');
const oct_moods = require('./mockPunchedMoodsProd/oct_moods.json');
const nov_moods = require('./mockPunchedMoodsProd/nov_moods.json');

const app = express();
const port_number = 8000;

// CORS対策
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_, res) => res.send('Cocoa mock server'));

// このアプリにて使用する気分の情報を返す
app.get('/moods', (_, res) => {
  res.status(200).json(moods);
});

app.get('/causes', (_, res) => {
  res.status(200).json(causes);
});

// 社員の情報を返す
app.get('/employees', (_, res) => {
  res.status(200).json(employees);
});

// 社員の気分入力情報を、飛んできた年と月のクエリを元に値を返す
app.get('/listMoodOfEmployee', (req, res) => {
  const begin_date = req.query.begin_date;
  const end_date = req.query.end_date;
  console.log('begin_date:' + begin_date);
  console.log('end_date:' + end_date);
  if (begin_date == 1573398000 && end_date == 1573829999) {
    res.status(200).json(nov11_15_moods);
  } else if (begin_date == 1574002800 && end_date == 1574434799) {
    res.status(200).json(nov18_22_moods);
  } else if (begin_date == 1574607600 && end_date == 1575039599) {
    res.status(200).json(nov25_29_moods);
  } else if (begin_date == 1569855600 && end_date == 1572533999) {
    res.status(200).json(oct_moods);
  } else if (begin_date == 1572534000 && end_date == 1575125999) {
    res.status(200).json(nov_moods);
  } else {
    res.status(200).json([]);
  }
});

app.get('/departments', (_, res) => {
  res.status(200).json(departments);
});

app.get('/listMoodOfDepartment', (req, res) => {
  const begin_date = req.query.begin_date;
  const end_date = req.query.end_date;
  if (begin_date == 1578236400 && end_date == 1578668399) {
    res.status(200).json(jan6_10_department_moods);
  } else if (begin_date == 1578841200 && end_date == 1579273199) {
    res.status(200).json(jan13_17_department_moods);
  } else if (begin_date == 1579446000 && end_date == 1579877999) {
    res.status(200).json(jan20_24_department_moods);
  } else if (begin_date == 1580050800 && end_date == 1580482799) {
    res.status(200).json(jan27_31_department_moods);
  } else if (begin_date == 1577804400 && end_date == 1580482799) {
    res.status(200).json(jan_department_moods);
  } else {
    res.status(200).json({});
  }
});

app.listen(port_number, () => console.log('Listening on Port' + port_number));
