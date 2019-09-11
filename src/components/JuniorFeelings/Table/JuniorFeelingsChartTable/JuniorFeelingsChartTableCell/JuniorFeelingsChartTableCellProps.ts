import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsChartTableCellStyles';
import FeelingsState from 'src/apis/JuniorFeelingsApi/FeelingsResponse/Feelings';
import WeekFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/WeekFeelings';

type JuniorFeelingsChartTableCellOwnProps = {
  weekFeelings: WeekFeelings;
};

export type JuniorFeelingsChartTableCellConnectedProps = {
  feelings: FeelingsState[];
};

type JuniorFeelingsChartTableCellProps = WithStyles<typeof styles> &
  JuniorFeelingsChartTableCellOwnProps &
  JuniorFeelingsChartTableCellConnectedProps;

export default JuniorFeelingsChartTableCellProps;
