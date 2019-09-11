import * as React from 'react';
import JuniorFeelingsIconTableRowProps from './JuniorFeelingsIconTableRowProps';
import styles from './JuniorFeelingsIconTableRowStyles';
import { withStyles } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import JuniorFeelingsIconTableCell from 'src/containers/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCell';
import Button from '@material-ui/core/Button';

class JuniorFeelingsIconTableRow extends React.Component<JuniorFeelingsIconTableRowProps> {
  render() {
    const { classes, juniorData, handleClick, weekIndex } = this.props;

    return (
      <TableRow key={juniorData.name}>
        <TableCell align='center' className={classes.cellContainer}>
          <Button
            size='medium'
            className={classes.juniorPosition}
            onClick={handleClick(juniorData)}
          >
            {juniorData.name}
          </Button>
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings[weekIndex].monday.attendance.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings[weekIndex].tuesday.attendance.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={
              juniorData.week_feelings[weekIndex].wednesday.attendance.feeling_id
            }
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings[weekIndex].thursday.attendance.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings[weekIndex].friday.attendance.feeling_id}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsIconTableRow);
