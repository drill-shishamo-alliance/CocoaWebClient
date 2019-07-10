import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsIconTableCellStyles';
import FeelingsState from 'src/apis/JuniorFeelingsApi/FeelingsResponse/Feelings';

type JuniorFeelingsIconTableCellOwnProps = {
  attendanceFeelingId: string;
  leavingFeelingId: string;
};

export type JuniorFeelingsIconTableCellConnectedProps = {
  feelings: FeelingsState[];
};

type JuniorFeelingsIconTableCellProps = WithStyles<typeof styles> &
  JuniorFeelingsIconTableCellOwnProps &
  JuniorFeelingsIconTableCellConnectedProps;

export default JuniorFeelingsIconTableCellProps;
