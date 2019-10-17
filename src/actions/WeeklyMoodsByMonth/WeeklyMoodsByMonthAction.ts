import * as ActionCreators from './WeeklyMoodsByMonthActionCreator';
import { ActionType } from 'typesafe-actions';

type WeeklyMoodsByMonthAction = ActionType<typeof ActionCreators>;
export default WeeklyMoodsByMonthAction;
