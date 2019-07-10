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
import JuniorFeelingsIconTableRow from 'src/components/JuniorFeelings/JuniorFeelingsIconTable/JuniorFeelingsIconTableRow/JuniorFeelingsIconTableRow';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

class JuniorFeelingsTable extends React.Component<JuniorFeelingsProps> {
  public componentWillMount() {
    this.props.getJuniorFeelingsRequest();
    this.props.getFeelingsRequest();
  }

  render() {
    const { classes, juniorFeelingsState } = this.props;

    const rows: JuniorFeelings[] = [];

    for (let i = 0; i < 10; i += 1) {
      rows.push(...juniorFeelingsState);
    }

    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell align='center' className={classNames(classes.cellContainer)}>
                <h2 className={classes.juniorPosition}>社員</h2>
                {juniorFeelingsState
                  .filter((_, index) => index === 0) // １週間分の日付データが欲しいのでindexをユーザ1人に絞る
                  .map(junior =>
                    Object.values(junior.week_feelings).map((day, index) => (
                      <div className={classNames(classes.columnContainer, classes.dataPosition)}>
                        {index === 0 ? (
                          <h2>
                            {dayjs(day.date)
                              .locale('ja')
                              .format('YYYY/MM/DD(dd)')}
                          </h2>
                        ) : (
                          <h2>
                            {dayjs(day.date)
                              .locale('ja')
                              .format('MM/DD(dd)')}
                          </h2>
                        )}
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
        </Table>
        <div className={classes.tableBody}>
          <Table className={classes.tableLayout}>
            <TableBody>
              {rows.map(junior => (
                <JuniorFeelingsIconTableRow juniorData={junior} />
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsTable);
