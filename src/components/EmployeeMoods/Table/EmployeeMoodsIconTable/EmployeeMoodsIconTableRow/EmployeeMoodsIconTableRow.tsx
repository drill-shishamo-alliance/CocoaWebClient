import * as React from 'react';
import EmployeeMoodsIconTableRowProps from './EmployeeMoodsIconTableRowProps';
import styles from './EmployeeMoodsIconTableRowStyles';
import { withStyles } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import EmployeeMoodsIconTableCell from 'src/containers/EmployeeMoodsIconTableCell/EmployeeMoodsIconTableCell';
import Button from '@material-ui/core/Button';

class EmployeeMoodsIconTableRow extends React.Component<EmployeeMoodsIconTableRowProps> {
  render() {
    const { classes, employeeData, handleClick, weekIndex } = this.props;

    return (
      <TableRow key={employeeData.name}>
        <TableCell align='center' className={classes.cellContainer}>
          <Button
            size='medium'
            className={classes.employeePosition}
            onClick={handleClick(employeeData)}
          >
            {employeeData.name}
          </Button>
          <EmployeeMoodsIconTableCell
            attendanceMoodId={employeeData.week_moods[weekIndex].monday.attendance.mood_id}
          />
          <EmployeeMoodsIconTableCell
            attendanceMoodId={employeeData.week_moods[weekIndex].tuesday.attendance.mood_id}
          />
          <EmployeeMoodsIconTableCell
            attendanceMoodId={employeeData.week_moods[weekIndex].wednesday.attendance.mood_id}
          />
          <EmployeeMoodsIconTableCell
            attendanceMoodId={employeeData.week_moods[weekIndex].thursday.attendance.mood_id}
          />
          <EmployeeMoodsIconTableCell
            attendanceMoodId={employeeData.week_moods[weekIndex].friday.attendance.mood_id}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(EmployeeMoodsIconTableRow);
