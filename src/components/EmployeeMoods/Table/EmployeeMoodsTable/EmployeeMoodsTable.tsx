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
import EmployeeMoodsIconTableRow from 'src/components/EmployeeMoods/Table/EmployeeMoodsIconTable/EmployeeMoodsIconTableRow/EmployeeMoodsIconTableRow';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EmployeeMoodsTableState from './EmployeeMoodsTableState';
import EmployeeMoodsChartTableRow from '../EmployeeMoodsChartTable/EmployeeMoodsChartTableRow/EmployeeMoodsChartTableRow';
import { ScreenType } from '../../EmployeeMoods/ScreenType';
import { Button } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

class EmployeeMoodsTable extends React.Component<EmployeeMoodsProps, EmployeeMoodsTableState> {
  public componentWillMount() {
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

  public handleEmployeeDetailsClick = (employeeMoods: EmployeeMoods) => (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const { selectEmployee, switchScreen } = this.props;
    selectEmployee(employeeMoods);
    switchScreen(ScreenType.EMPLOYEE_DETAILS);
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
            <Tab label='通常版' />
            <Tab label='Chart版' />
          </Tabs>
        </Paper>
        <Paper className={classes.root}>
          <Button
            size='small'
            className={classes.previousButton}
            onClick={this.handlePreviousButtonClick}
          >
            {<KeyboardArrowLeft />}前の週
          </Button>
          <Button size='small' className={classes.nextButton} onClick={this.handleNextButtonClick}>
            次の週{<KeyboardArrowRight />}
          </Button>
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
                    <EmployeeMoodsIconTableRow
                      weekIndex={this.props.currentDisplayedDate.weekIndex}
                      employeeData={employee}
                      handleClick={this.handleEmployeeDetailsClick}
                    />
                  ) : (
                    <EmployeeMoodsChartTableRow
                      weekIndex={this.props.currentDisplayedDate.weekIndex}
                      employeeData={employee}
                      handleClick={this.handleEmployeeDetailsClick}
                    />
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
