import { WithStyles } from '@material-ui/core';
import styles from './EmployeeMoodsTableStyles';
import EmployeeMoodsState from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';
import { ScreenType } from '../../EmployeeMoods/ScreenType';

type EmployeeMoodsTableOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
  setWeekIndex: (weekIndex: number) => void;
};

export type EmployeeMoodsConnectedProps = {
  employeeMoodsState: EmployeeMoodsState[];
};

export type EmployeeMoodsDispatchProps = {
  selectEmployee: (employeeMoods: EmployeeMoods) => void;
  getEmployeeMoodsRequest: (id?: number, accessToken?: string) => void;
  getMoodsRequest: (accessToken?: string) => void;
};
type EmployeeMoodsProps = WithStyles<typeof styles> &
  EmployeeMoodsTableOwnProps &
  EmployeeMoodsConnectedProps &
  EmployeeMoodsDispatchProps;

export default EmployeeMoodsProps;
