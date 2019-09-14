import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsChartTableRowStyles';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

type JuniorFeelingsChartTableRowOwnProps = {
  weekIndex: number;
  juniorData: JuniorFeelings;
  handleClick: (
    juniorFeelings: JuniorFeelings
  ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type JuniorFeelingsChartTableRowProps = WithStyles<typeof styles> &
  JuniorFeelingsChartTableRowOwnProps;

export default JuniorFeelingsChartTableRowProps;
