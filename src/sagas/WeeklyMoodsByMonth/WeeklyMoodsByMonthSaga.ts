import { groupWeeklyMoodsByMonth } from 'src/actions/WeeklyMoodsByMonth/WeeklyMoodsByMonthActionCreator';
import { getEmployeeMonthMoods } from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsActionCreator';
import { takeLatest, select, put } from 'redux-saga/effects';
import EmployeeMoodsDetailsActionType from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsActionType';
import RootState from 'src/states';
import {
  WeeklyMoods,
  WeeklyMoodsByMonthState,
} from 'src/states/WeeklyMoodsByMonth/WeeklyMoodsByMonthState';
import WeekMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/WeekMoods';

enum MoodNames {
  VeryDissatisfied = 'veryDissatisfied',
  Dissatisfied = 'dissatisfied',
  Face = 'face',
  Satisfied = 'satisfied',
  VerySatisfied = 'verySatisfied',
  Bad = 'bad',
}

function countWeekMoods(weekMoodsData: WeekMoods[]) {
  let weeklyMoods: WeeklyMoods = {};
  weekMoodsData.forEach((weekMoods, index) => {
    let veryDissatisfiedCount = 0;
    let dissatisfiedCount = 0;
    let faceCount = 0;
    let satisfiedCount = 0;
    let verySatisfiedCount = 0;
    let badCount = 0;

    // 週ごとのそれぞれの気分の数をカウントする
    Object.values(weekMoods).forEach(day => {
      switch (day.mood_ids.attendance) {
        case 'id_1':
          veryDissatisfiedCount++;
          break;
        case 'id_2':
          dissatisfiedCount++;
          break;
        case 'id_3':
          faceCount++;
          break;
        case 'id_4':
          satisfiedCount++;
          break;
        case 'id_5':
          verySatisfiedCount++;
          break;
        default:
          badCount++;
          break;
      }
    });

    // その月の1週目ならweek1というkey名になる
    const weekNumber = `week${index + 1}`;
    weeklyMoods[weekNumber] = {
      veryDissatisfied: {
        name: MoodNames.VeryDissatisfied,
        count: veryDissatisfiedCount,
      },
      dissatisfied: {
        name: MoodNames.Dissatisfied,
        count: dissatisfiedCount,
      },
      face: {
        name: MoodNames.Face,
        count: faceCount,
      },
      satisfied: {
        name: MoodNames.Satisfied,
        count: satisfiedCount,
      },
      verySatisfied: {
        name: MoodNames.VerySatisfied,
        count: verySatisfiedCount,
      },
      bad: {
        name: MoodNames.Bad,
        count: badCount,
      },
    };
  });

  let veryDissatisfiedCount = 0;
  let dissatisfiedCount = 0;
  let faceCount = 0;
  let satisfiedCount = 0;
  let verySatisfiedCount = 0;
  let badCount = 0;

  // その月分の気分をカウントする
  Object.values(weeklyMoods).map(weeklyMood => {
    veryDissatisfiedCount += weeklyMood.veryDissatisfied.count;
    dissatisfiedCount += weeklyMood.dissatisfied.count;
    faceCount += weeklyMood.face.count;
    satisfiedCount += weeklyMood.satisfied.count;
    verySatisfiedCount += weeklyMood.veryDissatisfied.count;
    badCount += weeklyMood.bad.count;
  });

  weeklyMoods['month'] = {
    veryDissatisfied: {
      name: MoodNames.VeryDissatisfied,
      count: veryDissatisfiedCount,
    },
    dissatisfied: {
      name: MoodNames.Dissatisfied,
      count: dissatisfiedCount,
    },
    face: {
      name: MoodNames.Face,
      count: faceCount,
    },
    satisfied: {
      name: MoodNames.Satisfied,
      count: satisfiedCount,
    },
    verySatisfied: {
      name: MoodNames.VerySatisfied,
      count: verySatisfiedCount,
    },
    bad: {
      name: MoodNames.Bad,
      count: badCount,
    },
  };

  return weeklyMoods;
}

// サーバから受け取った社員の気分情報を、グラフ描画ライブラリに渡すための形に整形する
export function* groupWeeklyMoodsByMonthSaga(
  action: ReturnType<typeof getEmployeeMonthMoods.success>
) {
  const state: RootState = yield select();
  const EmployeeMoodsData = action.payload.EmployeeMoodsData;

  let employeeWeekMoods: { [employeeId: string]: WeeklyMoods } = {};

  EmployeeMoodsData.map(EmployeeMoods => {
    employeeWeekMoods[EmployeeMoods.user_id] = countWeekMoods(EmployeeMoods.week_moods);
  });

  const WeeklyMoodsByMonth: WeeklyMoodsByMonthState = {
    [2019]: {
      [state.currentDisplayedDateState.month]: employeeWeekMoods,
    },
  };

  yield put(groupWeeklyMoodsByMonth({ WeeklyMoodsByMonth: WeeklyMoodsByMonth }));
}

const weeklyMoodsByMonthSaga = [
  takeLatest(
    EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_SUCCESSED,
    groupWeeklyMoodsByMonthSaga
  ),
];

export default weeklyMoodsByMonthSaga;
