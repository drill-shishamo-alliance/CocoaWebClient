import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Props from './EmployeeMoodsDetailsProps';
import styles from './EmployeeMoodsDetatilsStyles';
import { Typography, IconButton, Button } from '@material-ui/core';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import { ScreenType } from '../../EmployeeMoods/ScreenType';
import State from './EmployeeMoodsDetailsState';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import PieGraph from '../PieGraph/PieGraph';

class EmployeeMoodsDetails extends React.Component<Props, State> {
  readonly state = {
    isWeekButtonClicked: true,
    isMonthButtonClicked: false,
  };

  public componentDidMount() {
    this.props.getEmployeeMonthMoodsRequest(
      new Date().getFullYear(),
      this.props.currentDisplayedDate.month
    );
  }

  public handleBackButtonClick = () => {
    const { switchScreen } = this.props;
    switchScreen(ScreenType.EMPLOYEE_TABLE);
  };

  public handlePreviousWeekButtonClick = () => {
    this.props.previousWeek();
  };

  public handleNextWeekButtonClick = () => {
    this.props.nextWeek();
  };

  public handlePreviousMonthButtonClick = () => {
    this.props.previousMonth();
    this.props.getEmployeeMonthMoodsRequest(
      new Date().getFullYear(),
      this.props.currentDisplayedDate.month - 1
    );
  };

  public handleNextMonthButtonClick = () => {
    this.props.nextMonth();
    this.props.getEmployeeMonthMoodsRequest(
      new Date().getFullYear(),
      this.props.currentDisplayedDate.month + 1
    );
  };

  public handleWeekButtonClick = () => {
    this.setState({ isWeekButtonClicked: true, isMonthButtonClicked: false });
  };

  public handleMonthButtonClick = (date: string) => () => {
    this.setState({ isWeekButtonClicked: false, isMonthButtonClicked: true });
    this.props.getEmployeeMonthMoodsRequest(
      dayjs(date).year(),
      this.props.currentDisplayedDate.month
    );
  };

  public setPeriod = (first: string, last: string): string => {
    return `${dayjs(first)
      .locale('ja')
      .format('MM/DD(dd)')}〜${dayjs(last)
      .locale('ja')
      .format('MM/DD(dd)')}`;
  }; // 期間を返してくれる関数

  render() {
    const { classes, employeeMoodsState, moods } = this.props;
    const { selectEmployee } = employeeMoodsState.details;

    const index: number[] = [];
    const dates: string[] = [];
    let period: string = '';

    let veryDissatisfiedCount = 0;
    let dissatisfiedCount = 0;
    let faceCount = 0;
    let satisfiedCount = 0;
    let verySatisfiedCount = 0;
    let badCount = 0;

    selectEmployee &&
      Object.values(selectEmployee.week_moods[this.props.currentDisplayedDate.weekIndex]).map(
        day =>
          index.push(moods.findIndex(f => f.id === day.mood_ids.attendance)) && dates.push(day.date)
      );

    period = this.setPeriod(dates[0], dates[dates.length - 1]); // 表示しているデータの期間

    index.map(i =>
      i === 0
        ? veryDissatisfiedCount++
        : 0 || i === 1
        ? dissatisfiedCount++
        : 0 || i === 2
        ? faceCount++
        : 0 || i === 3
        ? satisfiedCount++
        : 0 || i === 4
        ? verySatisfiedCount++
        : 0 || i < 0
        ? badCount++
        : 0
    );

    const data = [
      { name: '未入力', value: badCount, unit: '日' },
      { name: '最悪', value: veryDissatisfiedCount, unit: '日' },
      { name: '悪い', value: dissatisfiedCount, unit: '日' },
      { name: '普通', value: faceCount, unit: '日' },
      { name: '良い', value: satisfiedCount, unit: '日' },
      { name: '最高', value: verySatisfiedCount, unit: '日' },
    ];

    return (
      <div>
        <div aria-label='back-button'>
          <IconButton className={classes.backButton} onClick={this.handleBackButtonClick}>
            <BackIcon className={classes.backIcon} />
          </IconButton>
        </div>
        <Typography variant='h5' className={classes.title}>
          {selectEmployee && `${selectEmployee.user_name}さんの詳細`}
        </Typography>
        <div className={classes.moodContainer}>
          <Button
            variant='contained'
            className={classes.weekButton}
            onClick={this.handleWeekButtonClick}
          >
            1週間ごと
          </Button>
          <Button
            variant='contained'
            className={classes.monthButton}
            onClick={this.handleMonthButtonClick(dates[0])}
          >
            1ヶ月ごと
          </Button>
          {this.state.isWeekButtonClicked === true ? (
            <div>
              <Button
                size='small'
                className={classes.previousButton}
                onClick={this.handlePreviousWeekButtonClick}
              >
                {<KeyboardArrowLeft />}前の週
              </Button>
              <Button
                size='small'
                className={classes.nextButton}
                onClick={this.handleNextWeekButtonClick}
              >
                次の週
                {<KeyboardArrowRight />}
              </Button>
            </div>
          ) : (
            <div>
              <Button
                size='small'
                className={classes.previousButton}
                onClick={this.handlePreviousMonthButtonClick}
              >
                {<KeyboardArrowLeft />}前の月
              </Button>
              <Button
                size='small'
                className={classes.nextButton}
                onClick={this.handleNextMonthButtonClick}
              >
                次の月
                {<KeyboardArrowRight />}
              </Button>
            </div>
          )}
          {this.state.isWeekButtonClicked === true ? (
            <Typography variant='h5'>{`${period}の気分`}</Typography>
          ) : (
            selectEmployee && (
              <Typography variant='h5'>{`${this.props.currentDisplayedDate.month}月の気分`}</Typography>
            )
          )}
          <PieGraph data={data} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EmployeeMoodsDetails);
