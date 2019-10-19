import { WeeklyMoodsByMonthState } from 'src/states/WeeklyMoodsByMonth/WeeklyMoodsByMonthState';
import WeeklyMoodsByMonthAction from 'src/actions/WeeklyMoodsByMonth/WeeklyMoodsByMonthAction';
import WeeklyMoodsByMonthActionType from 'src/actions/WeeklyMoodsByMonth/WeeklyMoodsByMonthActionType';

const initialState: WeeklyMoodsByMonthState = {};

const WeeklyMoodsByMonth = (
  state: WeeklyMoodsByMonthState = initialState,
  action: WeeklyMoodsByMonthAction
): WeeklyMoodsByMonthState => {
  switch (action.type) {
    case WeeklyMoodsByMonthActionType.GROUP_WEEKLY_MOODS_BY_MONTH:
      return {
        ...state,
        ...action.payload.WeeklyMoodsByMonth,
      };
    default:
      return state;
  }
};

export default WeeklyMoodsByMonth;
