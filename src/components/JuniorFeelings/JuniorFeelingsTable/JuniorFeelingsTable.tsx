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
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import JuniorFeelingsTableRow from '../JuniorFeelingsTableRow/JuniorFeelingsTableRow';

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
              <TableCell align='center' className={classes.cellContainer}>
                {juniorFeelingsState
                  .filter((_, index) => index === 0) // １週間分の日付データが欲しいのでindexをユーザ1人に絞る
                  .map(junior =>
                    Object.values(junior.week_feelings).map(day => (
                      <div className={classes.columnContainer}>
                        <h2>
                          {dayjs(day.date)
                            .locale('ja')
                            .format('MM/DD(dd)')}
                        </h2>
                        <div className={classes.datePosition}>
                          <i
                            className={classNames(
                              'material-icons',
                              classes.sunnyColor,
                              classes.iconMargin
                            )}
                          >
                            wb_sunny
                          </i>
                          <i
                            className={classNames(
                              'material-icons',
                              classes.moonColor,
                              classes.iconMargin
                            )}
                          >
                            brightness_2
                          </i>
                        </div>
                      </div>
                    ))
                  )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {juniorFeelingsState.map(junior => (
              <JuniorFeelingsTableRow juniorData={junior} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(JuniorFeelings);
