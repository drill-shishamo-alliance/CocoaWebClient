import { WithStyles } from '@material-ui/core';
import styles from './EmployeeMoodsChartTableRowStyles';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';

type EmployeeMoodsChartTableRowOwnProps = {
  weekIndex: number;
  employeeData: EmployeeMoods;
  handleClick: (
    employeeMoods: EmployeeMoods
  ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type EmployeeMoodsChartTableRowProps = WithStyles<typeof styles> &
  EmployeeMoodsChartTableRowOwnProps;

export default EmployeeMoodsChartTableRowProps;
