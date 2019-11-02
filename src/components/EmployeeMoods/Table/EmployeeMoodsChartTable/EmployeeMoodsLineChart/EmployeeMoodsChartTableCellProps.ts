import { WithStyles } from '@material-ui/core';
import styles from './EmployeeMoodsChartTableCellStyles';
import MoodsState from './node_modules/src/apis/EmployeeMoodsApi/MoodsResponse/Moods';
import WeekMoods from './node_modules/src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/WeekMoods';

type EmployeeMoodsChartTableCellOwnProps = {
  weekMoods: WeekMoods;
};

export type EmployeeMoodsChartTableCellConnectedProps = {
  moods: MoodsState[];
};

type EmployeeMoodsChartTableCellProps = WithStyles<typeof styles> &
  EmployeeMoodsChartTableCellOwnProps &
  EmployeeMoodsChartTableCellConnectedProps;

export default EmployeeMoodsChartTableCellProps;
