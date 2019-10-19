import { WithStyles } from '@material-ui/core';
import styles from './EmployeeMoodsIconTableRowStyles';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';

type EmployeeMoodsIconTableRowOwnProps = {
  weekIndex: number;
  employeeData: EmployeeMoods;
  handleClick: (
    employeeMoods: EmployeeMoods
  ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type EmployeeMoodsIconTableRowProps = WithStyles<typeof styles> & EmployeeMoodsIconTableRowOwnProps;

export default EmployeeMoodsIconTableRowProps;
