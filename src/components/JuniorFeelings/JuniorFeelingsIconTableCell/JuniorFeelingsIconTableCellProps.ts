import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsIconTableCellStyles';
import FeelingsState from 'src/apis/JuniorFeelingsApi/FeelingsResponse/Feelings';

type JuniorFeelingsIconTableCellOwnProps = {
  attendanceFeelingId: string;
  leavingFeelingId: string;
};

export type IconTableCellConnectedProps = {
  feelings: FeelingsState[];
};

type JuniorFeelingsIconTableCellProps = WithStyles<typeof styles> &
  JuniorFeelingsIconTableCellOwnProps &
  IconTableCellConnectedProps;

export default JuniorFeelingsIconTableCellProps;
