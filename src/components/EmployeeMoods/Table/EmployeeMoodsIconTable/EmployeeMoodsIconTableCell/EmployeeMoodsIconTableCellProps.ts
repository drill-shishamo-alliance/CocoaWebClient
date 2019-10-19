import { WithStyles } from '@material-ui/core';
import styles from './EmployeeMoodsIconTableCellStyles';
import MoodsState from 'src/apis/EmployeeMoodsApi/MoodsResponse/Moods';

type EmployeeMoodsIconTableCellOwnProps = {
  attendanceMoodId: string;
};

export type EmployeeMoodsIconTableCellConnectedProps = {
  moods: MoodsState[];
};

type EmployeeMoodsIconTableCellProps = WithStyles<typeof styles> &
  EmployeeMoodsIconTableCellOwnProps &
  EmployeeMoodsIconTableCellConnectedProps;

export default EmployeeMoodsIconTableCellProps;
