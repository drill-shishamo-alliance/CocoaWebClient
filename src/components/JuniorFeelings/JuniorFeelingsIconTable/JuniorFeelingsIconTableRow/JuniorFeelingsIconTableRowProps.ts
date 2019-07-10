import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsIconTableRowStyles';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

type JuniorFeelingsIconTableRowOwnProps = {
  juniorData: JuniorFeelings;
};

type JuniorFeelingsIconTableRowProps = WithStyles<typeof styles> &
  JuniorFeelingsIconTableRowOwnProps;

export default JuniorFeelingsIconTableRowProps;
