import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styles from './TableStyles';
import LineChart from '../LineChart/LineChart';
import { employee } from 'src/states/Employees/Employees';

export type Props = {
  employee: employee;
};

const EmployeeMoodsChartTableRow: React.FC<Props> = props => {
  const classes = styles();
  const { employee } = props;

  return (
    <TableRow>
      <TableCell align='center' className={classes().cellContainer}>
        <div className={classes().employeePosition}>{employee.name}</div>
        {/* ここにその社員さんの気分情報のstring[]を渡してあげる */}
        <LineChart moodIds={[]} />
      </TableCell>
    </TableRow>
  );
};

export default EmployeeMoodsChartTableRow;
