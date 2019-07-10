import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsTableRowStyles';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

type JuniorFeelingsTableRowOwnProps = {
  juniorData: JuniorFeelings;
};

type JuniorFeelingsTableRowProps = WithStyles<typeof styles> & JuniorFeelingsTableRowOwnProps;

export default JuniorFeelingsTableRowProps;
