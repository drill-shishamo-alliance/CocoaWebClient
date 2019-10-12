import { WithStyles } from '@material-ui/core';
import styles from './EmployeeMoodsDetatilsStyles';
import EmployeeMoodsState from 'src/states/EmployeeMoods/EmployeeMoodsState';
import Moods from 'src/apis/EmployeeMoodsApi/MoodsResponse/Moods';
import { ScreenType } from '../../EmployeeMoods/ScreenType';
import { CurrentDisplayedDateState } from 'src/states/CurrentDisplayedDate/CurrentDisplayedDate';

type EmployeeMoodsDetailsOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
};

export type EmployeeMoodsDetailsConnectedProps = {
  employeeMoodsState: EmployeeMoodsState;
  moods: Moods[];
  currentDisplayedDate: CurrentDisplayedDateState;
};

export type EmployeeMoodsDetailsDispatchProps = {
  getEmployeeMonthMoodsRequest: (year: number, month: number) => void;
  nextWeek: () => void;
  previousWeek: () => void;
  nextMonth: () => void;
  previousMonth: () => void;
};

type EmployeeMoodsDetailsProps = WithStyles<typeof styles> &
  EmployeeMoodsDetailsOwnProps &
  EmployeeMoodsDetailsConnectedProps &
  EmployeeMoodsDetailsDispatchProps;

export default EmployeeMoodsDetailsProps;
