import { createStandardAction } from 'typesafe-actions';
import { WeeklyMoodsByMonthState } from 'src/states/WeeklyMoodsByMonth/WeeklyMoodsByMonthState';
import WeeklyMoodsByMonthActionType from './WeeklyMoodsByMonthActionType';

export const groupWeeklyMoodsByMonth = createStandardAction(
  WeeklyMoodsByMonthActionType.GROUP_WEEKLY_MOODS_BY_MONTH
)<{ WeeklyMoodsByMonth: WeeklyMoodsByMonthState }>();
