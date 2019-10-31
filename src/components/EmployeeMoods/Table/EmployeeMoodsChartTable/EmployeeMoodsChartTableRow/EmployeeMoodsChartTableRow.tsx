import * as React from 'react';
import EmployeeMoodsChartTableRowProps from './EmployeeMoodsChartTableRowProps';
import styles from './EmployeeMoodsChartTableRowStyles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import EmployeeMoodsChartTableCell from 'src/containers/EmployeeMoodsChartTableCell/EmployeeMoodsChartTableCell';

export type props = {};

const EmployeeMoodsChartTableRow = (props: props) => {
  const classes = styles();

  return (
    <TableRow>
      <TableCell align='center' className={classes().cellContainer}>
        <div className={classes().employeePosition}></div>
        <EmployeeMoodsChartTableCell />
      </TableCell>
    </TableRow>
  );
};

export default EmployeeMoodsChartTableRow;

class EmployeeMoodsChartTableRo extends React.Component<EmployeeMoodsChartTableRowProps> {
  render() {
    const { classes, employeeData, weekIndex } = this.props;

    return (
      <TableRow key={employeeData.user_name}>
        <TableCell align='center' className={classes.cellContainer}>
          <div className={classes.employeePosition}>{employeeData.user_name}</div>
          <EmployeeMoodsChartTableCell weekMoods={employeeData.week_moods[weekIndex]} />
        </TableCell>
      </TableRow>
    );
  }
}
