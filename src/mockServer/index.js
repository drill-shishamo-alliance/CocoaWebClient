const express = require('express');
const mar2_6_department_moods = require('./mockDepartmentMoods/mar2_6_department_moods.json');
const mar9_13_department_moods = require('./mockDepartmentMoods/mar9_13_department_moods.json');
const mar16_20_department_moods = require('./mockDepartmentMoods/mar16_20_department_moods.json');
const mar23_27_department_moods = require('./mockDepartmentMoods/mar23_27_department_moods.json');
const mar_department_moods = require('./mockDepartmentMoods/mar_department_moods');
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
const user = require('./userProd.json');

const app = express();
const port_number = 8000;

// CORS対策
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_, res) => res.send('Cocoa mock server'));

app.post('/login', (_, res) => {
  res.status(200).json(user);
});

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
  } else if (begin_date == 1582210800 && end_date == 1582815599) {
    res.status(200).json(feb20_21_and_24_26_moods);
  } else if (begin_date == 1580655600 && end_date == 1581087599) {
    res.status(200).json(feb3_7_moods);
  } else if (begin_date == 1581260400 && end_date == 1581692399) {
    res.status(200).json(feb10_14_moods);
  } else if (begin_date == 1581865200 && end_date == 1582297199) {
    res.status(200).json(feb17_21_moods);
  } else if (begin_date >= 1582470000 && end_date <= 1582902000) {
    res.status(200).json(feb24_28_moods);
  } else if (begin_date == 1580482800 && end_date == 1582988399) {
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
  console.log(begin_date);
  console.log(end_date);
  if (begin_date == 1583074800 && end_date == 1583506799) {
    res.status(200).json(mar2_6_department_moods);
  } else if (begin_date == 1583679600 && end_date == 1584111599) {
    res.status(200).json(mar9_13_department_moods);
  } else if (begin_date == 1584284400 && end_date == 1584716399) {
    res.status(200).json(mar16_20_department_moods);
  } else if (begin_date == 1584889200 && end_date == 1585321199) {
    res.status(200).json(mar23_27_department_moods);
  } else if (begin_date == 1582988400 && end_date == 1585666799) {
    res.status(200).json(mar_department_moods);
  } else {
    res.status(200).json({});
  }
});

app.listen(port_number, () => console.log('Listening on Port' + port_number));
