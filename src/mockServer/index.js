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
const feb20_21_and_24_26_moods = require('./mockPunchedMoodsProd/feb20_21_and_24_26.json');
const nov11_15_moods = require('./mockPunchedMoodsProd/nov11_15_moods.json');
const nov18_22_moods = require('./mockPunchedMoodsProd/nov18_22_moods.json');
const nov25_29_moods = require('./mockPunchedMoodsProd/nov25_29_moods.json');
const oct_moods = require('./mockPunchedMoodsProd/oct_moods.json');
const nov_moods = require('./mockPunchedMoodsProd/nov_moods.json');
const feb3_7_moods = require('./mockPunchedMoodsProd/feb3_7_moods.json');
const feb10_14_moods = require('./mockPunchedMoodsProd/feb10_14_moods.json');
const feb17_21_moods = require('./mockPunchedMoodsProd/feb17_21_moods.json');
const feb24_28_moods = require('./mockPunchedMoodsProd/feb24_28_moods.json');
const feb_moods = require('./mockPunchedMoodsProd/feb_moods.json');

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
  if (begin_date == 1573398000000 && end_date == 1573829999000) {
    res.status(200).json(nov11_15_moods);
  } else if (begin_date == 1574002800000 && end_date == 1574434799000) {
    res.status(200).json(nov18_22_moods);
  } else if (begin_date == 1574607600000 && end_date == 1575039599000) {
    res.status(200).json(nov25_29_moods);
  } else if (begin_date == 1569855600000 && end_date == 1572533999000) {
    res.status(200).json(oct_moods);
  } else if (begin_date == 1572534000000 && end_date == 1575125999000) {
    res.status(200).json(nov_moods);
  } else if (begin_date == 1582210800000 && end_date == 1582815599000) {
    res.status(200).json(feb20_21_and_24_26_moods);
  } else if (begin_date == 1580655600000 && end_date == 1581087599000) {
    res.status(200).json(feb3_7_moods);
  } else if (begin_date == 1581260400000 && end_date == 1581692399000) {
    res.status(200).json(feb10_14_moods);
  } else if (begin_date == 1581865200000 && end_date == 1582297199000) {
    res.status(200).json(feb17_21_moods);
  } else if (begin_date == 1582470000000 && end_date == 1582901999000) {
    res.status(200).json(feb24_28_moods);
  } else if (begin_date == 1580482800000 && end_date == 1582988399000) {
    res.status(200).json(feb_moods);
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
  if (begin_date == 1578236400000 && end_date == 1578668399000) {
    res.status(200).json(jan6_10_department_moods);
  } else if (begin_date == 1578841200000 && end_date == 1579273199000) {
    res.status(200).json(jan13_17_department_moods);
  } else if (begin_date == 1579446000000 && end_date == 1579877999000) {
    res.status(200).json(jan20_24_department_moods);
  } else if (begin_date == 1580050800000 && end_date == 1580482799000) {
    res.status(200).json(jan27_31_department_moods);
  } else if (begin_date == 1577804400000 && end_date == 1580482799000) {
    res.status(200).json(jan_department_moods);
  } else {
    res.status(200).json({});
  }
});

app.listen(port_number, () => console.log('Listening on Port' + port_number));
