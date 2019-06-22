import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import JuniorFeelingsProps from './JuniorFeelingsTableProps';
import { withStyles } from '@material-ui/styles';
import styles from './JuniorFeelingsTableStyles';
import JuniorFeelingsIconTableCell from 'src/containers/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCell';

class JuniorFeelings extends React.Component<JuniorFeelingsProps> {
  public componentWillMount() {
    this.props.getJuniorFeelingsRequest();
    this.props.getFeelingsRequest();
  }

  render() {
    const { classes, juniorFeelingsState } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>
                <h2>社員</h2>
              </TableCell>
              {juniorFeelingsState
                .filter((_, index) => index === 0) // １週間分の日付データが欲しいのでindexをユーザ1人に絞る
                .map(junior =>
                  Object.values(junior.week_feelings).map(day => (
                    <TableCell align='center'>
                      <div className={classes.headerDate}>
                        <h2>{day.date}</h2>
                        <div className={classes.datePosition}>
                          <i className={classNames('material-icons', classes.sunnyColor)}>
                            wb_sunny
                          </i>
                          <i className={classNames('material-icons', classes.moonColor)}>
                            brightness_2
                          </i>
                        </div>
                      </div>
                    </TableCell>
                  ))
                )}
            </TableRow>
          </TableHead>
          <TableBody>
            {juniorFeelingsState.map(junior => (
              <TableRow key={junior.name}>
                <TableCell component='th' scope='row' align='center'>
                  {junior.name}
                </TableCell>
                <TableCell align='center'>
                  <JuniorFeelingsIconTableCell
                    attendanceFeelingId={junior.week_feelings.monday.attendance.feeling_id}
                    leavingFeelingId={junior.week_feelings.monday.leaving.feeling_id}
                  />
                </TableCell>
                <TableCell align='center'>
                  <JuniorFeelingsIconTableCell
                    attendanceFeelingId={junior.week_feelings.tuesday.attendance.feeling_id}
                    leavingFeelingId={junior.week_feelings.tuesday.leaving.feeling_id}
                  />
                </TableCell>
                <TableCell align='center'>
                  <JuniorFeelingsIconTableCell
                    attendanceFeelingId={junior.week_feelings.wednesday.attendance.feeling_id}
                    leavingFeelingId={junior.week_feelings.wednesday.leaving.feeling_id}
                  />
                </TableCell>
                <TableCell align='center'>
                  <JuniorFeelingsIconTableCell
                    attendanceFeelingId={junior.week_feelings.thursday.attendance.feeling_id}
                    leavingFeelingId={junior.week_feelings.thursday.leaving.feeling_id}
                  />
                </TableCell>
                <TableCell align='center'>
                  <JuniorFeelingsIconTableCell
                    attendanceFeelingId={junior.week_feelings.friday.attendance.feeling_id}
                    leavingFeelingId={junior.week_feelings.friday.leaving.feeling_id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(JuniorFeelings);
