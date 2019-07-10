import * as React from 'react';
import JuniorFeelingsTableRowProps from './JuniorFeelingsTableRowProps';
import styles from './JuniorFeelingsTableRowStyles';
import { withStyles } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import JuniorFeelingsIconTableCell from 'src/containers/JuniorFeelingsIconTableCell/aaa';

class JuniorFeelingsTableRow extends React.Component<JuniorFeelingsTableRowProps> {
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
            leavingFeelingId={juniorData.week_feelings.monday.leaving.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.tuesday.attendance.feeling_id}
            leavingFeelingId={juniorData.week_feelings.tuesday.leaving.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.wednesday.attendance.feeling_id}
            leavingFeelingId={juniorData.week_feelings.wednesday.leaving.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.thursday.attendance.feeling_id}
            leavingFeelingId={juniorData.week_feelings.thursday.leaving.feeling_id}
          />
          <JuniorFeelingsIconTableCell
            attendanceFeelingId={juniorData.week_feelings.friday.attendance.feeling_id}
            leavingFeelingId={juniorData.week_feelings.friday.leaving.feeling_id}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsTableRow);
