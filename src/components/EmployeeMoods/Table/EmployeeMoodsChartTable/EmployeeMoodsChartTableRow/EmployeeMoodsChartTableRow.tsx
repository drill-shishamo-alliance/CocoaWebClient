import * as React from 'react';
import EmployeeMoodsChartTableRowProps from './EmployeeMoodsChartTableRowProps';
import styles from './EmployeeMoodsChartTableRowStyles';
import { withStyles } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import EmployeeMoodsChartTableCell from 'src/containers/EmployeeMoodsChartTableCell/EmployeeMoodsChartTableCell';
import Button from '@material-ui/core/Button';

class EmployeeMoodsChartTableRow extends React.Component<EmployeeMoodsChartTableRowProps> {
  render() {
    const { classes, employeeData, handleClick, weekIndex } = this.props;

    return (
      <TableRow key={employeeData.user_name}>
        <TableCell align='center' className={classes.cellContainer}>
          <Button
            size='medium'
            className={classes.employeePosition}
            onClick={handleClick(employeeData)}
          >
            {employeeData.user_name}
          </Button>
          <EmployeeMoodsChartTableCell weekMoods={employeeData.week_moods[weekIndex]} />
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(EmployeeMoodsChartTableRow);
