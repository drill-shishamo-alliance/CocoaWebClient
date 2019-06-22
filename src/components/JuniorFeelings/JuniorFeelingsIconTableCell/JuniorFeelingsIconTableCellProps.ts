import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsIconTableCellStyles';
import FeelingsState from 'src/apis/FeelingsApi/Feelings';

type IconTableCellProps = {
  attendanceFeelingId: string;
  leavingFeelingId: string;
};

export type IconTableCellConnectedProps = {
  feelings: FeelingsState[];
};

type JuniorFeelingsIconTableCellProps = WithStyles<typeof styles> &
  IconTableCellProps &
  IconTableCellConnectedProps;

export default JuniorFeelingsIconTableCellProps;
