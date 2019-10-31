import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import EmployeeMoodsProps from './EmployeeMoodsTableProps';
import { withStyles } from '@material-ui/styles';
import styles from './EmployeeMoodsTableStyles';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EmployeeMoodsTableState from './EmployeeMoodsTableState';
import EmployeeMoodsChartTableRow from '../EmployeeMoodsChartTable/EmployeeMoodsChartTableRow/EmployeeMoodsChartTableRow';
import { Button } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

class EmployeeMoodsTable extends React.Component<EmployeeMoodsProps, EmployeeMoodsTableState> {
  public componentDidMount() {
    this.props.getEmployeeMoodsRequest();
    this.props.getMoodsRequest();
  }

  readonly state = {
    value: 0,
  };

  public handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ value: newValue });
  };

  public handlePreviousButtonClick = () => {
    this.props.previousWeek();
  };

  public handleNextButtonClick = () => {
    this.props.nextWeek();
  };

  render() {
    const { classes, employeeMoodsState } = this.props;
    const { value } = this.state;

    const rows: EmployeeMoods[] = [];

    for (let i = 0; i < 10; i += 1) {
      rows.push(...employeeMoodsState);
    }

    return (
      <div>
        <Paper square className={classes.tabSize}>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={this.handleChange}
          >
            <Tab label='週詳細' />
            <Tab label='月詳細' />
          </Tabs>
        </Paper>
        <Paper className={classes.root}>
          {value === 2 ? (
            <div>
              <Button size='small' className={classes.previousButton}>
                {<KeyboardArrowLeft />}前の月
              </Button>
              <Button size='small' className={classes.nextButton}>
                次の月{<KeyboardArrowRight />}
              </Button>
            </div>
          ) : (
            <div>
              <Button
                size='small'
                className={classes.previousButton}
                onClick={this.handlePreviousButtonClick}
              >
                {<KeyboardArrowLeft />}前の週
              </Button>
              <Button
                size='small'
                className={classes.nextButton}
                onClick={this.handleNextButtonClick}
              >
                次の週{<KeyboardArrowRight />}
              </Button>
            </div>
          )}
          <Table>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell align='center' className={classNames(classes.cellContainer)}>
                  <h2 className={classes.employeePosition}>社員</h2>
                  {employeeMoodsState
                    .filter((_, index) => index === 0) // １週間分の日付データが欲しいのでindexをユーザ1人に絞る
                    .map(employee =>
                      Object.values(
                        employee.week_moods[this.props.currentDisplayedDate.weekIndex]
                      ).map((day, index) => (
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
                {rows.map(employee =>
                  value === 0 ? (
                    <EmployeeMoodsChartTableRow employeeData={employee} />
                  ) : value === 1 ? (
                    <EmployeeMoodsChartTableRow employeeData={employee} />
                  ) : (
                    <div></div>
                  )
                )}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(EmployeeMoodsTable);
