import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsTableRowStyles';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

type TableRowProps = {
  juniorData: JuniorFeelings;
};

type JuniorFeelingsTableRowProps = WithStyles<typeof styles> & TableRowProps;

export default JuniorFeelingsTableRowProps;
