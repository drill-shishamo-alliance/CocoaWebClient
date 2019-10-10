import { WithStyles } from '@material-ui/core';
import styles from './EmployeeMoodsDetatilsStyles';
import EmployeeMoodsState from 'src/states/EmployeeMoods/EmployeeMoodsState';
import Moods from 'src/apis/EmployeeMoodsApi/MoodsResponse/Moods';
import { ScreenType } from '../../EmployeeMoods/ScreenType';

type EmployeeMoodsDetailsOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
  weekIndex: number;
};

export type EmployeeMoodsDetailsConnectedProps = {
  employeeMoodsState: EmployeeMoodsState;
  moods: Moods[];
};

export type EmployeeMoodsDetailsDispatchProps = {
  getEmployeeMonthMoodsRequest: (year: number, month: number) => void;
};

type EmployeeMoodsDetailsProps = WithStyles<typeof styles> &
  EmployeeMoodsDetailsOwnProps &
  EmployeeMoodsDetailsConnectedProps &
  EmployeeMoodsDetailsDispatchProps;

export default EmployeeMoodsDetailsProps;
