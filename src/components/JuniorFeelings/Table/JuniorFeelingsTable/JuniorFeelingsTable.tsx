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
import JuniorFeelingsIconTableRow from 'src/components/JuniorFeelings/Table/JuniorFeelingsIconTable/JuniorFeelingsIconTableRow/JuniorFeelingsIconTableRow';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import JuniorFeelingsTableState from './JuniorFeelingsTableState';
import JuniorFeelingsChartTableRow from '../JuniorFeelingsChartTable/JuniorFeelingsChartTableRow/JuniorFeelingsChartTableRow';
import { ScreenType } from '../../JuniorFeelings/ScreenType';
import { Button } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

class JuniorFeelingsTable extends React.Component<JuniorFeelingsProps, JuniorFeelingsTableState> {
  public componentWillMount() {
    this.props.getJuniorFeelingsRequest();
    this.props.getFeelingsRequest();
  }

  readonly state = {
    value: 0,
    week_index: 0,
  };

  public handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ value: newValue });
  };

  public handlePreviousButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ week_index: this.state.week_index - 1 });
  };

  public handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ week_index: this.state.week_index + 1 });
  };

  public handleJuniorDetailsClick = (juniorFeelings: JuniorFeelings) => (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const { selectJunior, switchScreen } = this.props;
    selectJunior(juniorFeelings);
    switchScreen(ScreenType.JUNIOR_DETAILS);
  };

  render() {
    const { classes, juniorFeelingsState } = this.props;
    const { value } = this.state;

    const rows: JuniorFeelings[] = [];

    for (let i = 0; i < 10; i += 1) {
      rows.push(...juniorFeelingsState);
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
                  <h2 className={classes.juniorPosition}>社員</h2>
                  {juniorFeelingsState
                    .filter((_, index) => index === 0) // １週間分の日付データが欲しいのでindexをユーザ1人に絞る
                    .map(junior =>
                      Object.values(junior.week_feelings[this.state.week_index]).map(
                        (day, index) => (
                          <div
                            className={classNames(classes.columnContainer, classes.dataPosition)}
                          >
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
                        )
                      )
                    )}
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <div className={classes.tableBody}>
            <Table className={classes.tableLayout}>
              <TableBody>
                {rows.map(junior =>
                  value === 0 ? (
                    <JuniorFeelingsIconTableRow
                      weekIndex={this.state.week_index}
                      juniorData={junior}
                      handleClick={this.handleJuniorDetailsClick}
                    />
                  ) : (
                    <JuniorFeelingsChartTableRow
                      weekIndex={this.state.week_index}
                      juniorData={junior}
                      handleClick={this.handleJuniorDetailsClick}
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

export default withStyles(styles)(JuniorFeelingsTable);
