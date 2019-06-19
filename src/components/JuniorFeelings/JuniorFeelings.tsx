import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import JuniorFeelingsProps from './JuniorFeelingsProps';
import { withStyles } from '@material-ui/styles';
import styles from './JuniorFeelingsStyles';
import JuniorFeelingsIconTableCell from 'src/components/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCell';

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
              <TableCell align='center'>
                <div className={classes.headerDate}>
                  <h2>6/3</h2>
                  <div className={classes.datePosition}>
                    <i className={classNames('material-icons', classes.sunnyColor)}>wb_sunny</i>
                    <i className={classNames('material-icons', classes.moonColor)}>brightness_2</i>
                  </div>
                </div>
              </TableCell>
              <TableCell align='center'>
                <div className={classes.headerDate}>
                  <h2>6/4</h2>
                  <div className={classes.datePosition}>
                    <i className={classNames('material-icons', classes.sunnyColor)}>wb_sunny</i>
                    <i className={classNames('material-icons', classes.moonColor)}>brightness_2</i>
                  </div>
                </div>
              </TableCell>
              <TableCell align='center'>
                <div className={classes.headerDate}>
                  <h2>6/5</h2>
                  <div className={classes.datePosition}>
                    <i className={classNames('material-icons', classes.sunnyColor)}>wb_sunny</i>
                    <i className={classNames('material-icons', classes.moonColor)}>brightness_2</i>
                  </div>
                </div>
              </TableCell>
              <TableCell align='center'>
                <div className={classes.headerDate}>
                  <h2>6/6</h2>
                  <div className={classes.datePosition}>
                    <i className={classNames('material-icons', classes.sunnyColor)}>wb_sunny</i>
                    <i className={classNames('material-icons', classes.moonColor)}>brightness_2</i>
                  </div>
                </div>
              </TableCell>
              <TableCell align='center'>
                <div className={classes.headerDate}>
                  <h2>6/7</h2>
                  <div className={classes.datePosition}>
                    <i className={classNames('material-icons', classes.sunnyColor)}>wb_sunny</i>
                    <i className={classNames('material-icons', classes.moonColor)}>brightness_2</i>
                  </div>
                </div>
              </TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(JuniorFeelings);
