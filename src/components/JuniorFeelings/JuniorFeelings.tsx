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
import { JuniorFeelingsState } from 'src/states/JuniorFeelingsState';

const rows: JuniorFeelingsState = [];

function SimpleTable(props: JuniorFeelingsProps) {
  const { classes } = props;

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
          {rows.map(row => (
            <TableRow key={row.junior}>
              <TableCell component='th' scope='row' align='center'>
                {row.junior}
              </TableCell>
              {row.weekFeelings &&
                row.weekFeelings.map(icons => (
                  <TableCell align='center'>
                    <div className={classes.row}>
                      <i
                        className={classNames(
                          'material-icons',
                          classes.satisfiedColor,
                          classes.iconSize
                        )}
                      >
                        sentiment_satisfied_alt
                      </i>
                      <i
                        className={classNames(
                          'material-icons',
                          classes.verySatisfiedColor,
                          classes.iconSize
                        )}
                      >
                        sentiment_very_satisfied
                      </i>
                    </div>
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(SimpleTable);
