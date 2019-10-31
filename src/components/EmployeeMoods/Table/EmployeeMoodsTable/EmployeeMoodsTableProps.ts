import { WithStyles } from '@material-ui/core';
import styles from './EmployeeMoodsTableStyles';
import EmployeeMoodsState from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';
import { CurrentDisplayedDateState } from 'src/states/CurrentDisplayedDate/CurrentDisplayedDate';

export type EmployeeMoodsConnectedProps = {
  employeeMoodsState: EmployeeMoodsState[];
  currentDisplayedDate: CurrentDisplayedDateState;
};

export type EmployeeMoodsDispatchProps = {
  selectEmployee: (employeeMoods: EmployeeMoods) => void;
  getEmployeeMoodsRequest: (id?: number, accessToken?: string) => void;
  getMoodsRequest: (accessToken?: string) => void;
  nextWeek: () => void;
  previousWeek: () => void;
  nextMonth: () => void;
  previousMonth: () => void;
};
type EmployeeMoodsProps = WithStyles<typeof styles> &
  EmployeeMoodsConnectedProps &
  EmployeeMoodsDispatchProps;

export default EmployeeMoodsProps;
