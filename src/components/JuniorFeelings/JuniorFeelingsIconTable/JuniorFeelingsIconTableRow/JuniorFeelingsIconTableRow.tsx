import * as React from 'react';
import JuniorFeelingsIconTableRowProps from './JuniorFeelingsIconTableRowProps';
import styles from './JuniorFeelingsIconTableRowStyles';
import { withStyles } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import JuniorFeelingsIconTableCell from 'src/containers/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCell';

class JuniorFeelingsIconTableRow extends React.Component<JuniorFeelingsIconTableRowProps> {
  render() {
    const { classes, juniorData } = this.props;

    return (
      <TableRow key={juniorData.name}>
        <TableCell align='center' className={classes.cellContainer}>
          <Typography variant='subtitle2' className={classes.juniorPosition}>
            {juniorData.name}
          </Typography>
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.monday.attendance.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.tuesday.attendance.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.wednesday.attendance.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.thursday.attendance.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.friday.attendance.feeling_id}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsIconTableRow);
