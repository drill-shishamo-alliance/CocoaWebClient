import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsChartTableRowStyles';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

type JuniorFeelingsChartTableRowOwnProps = {
  juniorData: JuniorFeelings;
};

type JuniorFeelingsChartTableRowProps = WithStyles<typeof styles> &
  JuniorFeelingsChartTableRowOwnProps;

export default JuniorFeelingsChartTableRowProps;
