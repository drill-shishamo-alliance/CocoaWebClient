import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Props from './JuniorFeelingsDetailsProps';
import styles from './JuniorFeelingsDetatilsStyles';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Typography, IconButton, Button } from '@material-ui/core';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import { ScreenType } from '../../JuniorFeelings/ScreenType';
import State from './JuniorFeelingsDetailsState';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

class JuniorFeelingsDetails extends React.Component<Props, State> {
  readonly state = {
    week_index: this.props.weekIndex,
    isWeekButtonClicked: true,
    isMonthButtonClicked: false,
  };

  public handleBackButtonClick = () => {
    const { switchScreen } = this.props;
    switchScreen(ScreenType.JUNIOR_TABLE);
  };

  public handlePreviousButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ week_index: this.state.week_index - 1 });
  };

  public handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ week_index: this.state.week_index + 1 });
  };

  public handleWeekButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ isWeekButtonClicked: true, isMonthButtonClicked: false });
  };

  public handleMonthButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ isWeekButtonClicked: false, isMonthButtonClicked: true });
  };

  public setPeriod = (first: string, last: string): string => {
    return `${dayjs(first)
      .locale('ja')
      .format('MM/DD(dd)')}〜${dayjs(last)
      .locale('ja')
      .format('MM/DD(dd)')}`;
  }; // 期間を返してくれる関数

  render() {
    const { classes, juniorFeelingsState, feelings } = this.props;
    const { selectJunior } = juniorFeelingsState.details;

    const index: number[] = [];
    const dates: string[] = [];
    let period: string = '';

    let veryDissatisfiedCount = 0;
    let dissatisfiedCount = 0;
    let faceCount = 0;
    let satisfiedCount = 0;
    let verySatisfiedCount = 0;
    let badCount = 0;

    selectJunior &&
      Object.values(selectJunior.week_feelings[this.state.week_index]).map(
        day =>
          index.push(feelings.findIndex(f => f.id === day.attendance.feeling_id)) &&
          dates.push(day.date)
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

    const COLORS = ['#ff0000', '#7E8B8C', '#2880BA', '#E57D22', '#1ABC9C', '#EF7079'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = (props: any) => {
      const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill='white'
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline='central'
          fontSize='20'
        >
          {percent > 0 ? `${(percent * 100).toFixed(0)}%` : ''}
        </text>
      );
    };

    const CustomTooltip = (props: any) => {
      const { active, payload } = props;

      if (active) {
        return (
          <div className={classes.customTooltip}>
            <Typography
              className={classes.label}
              variant='h6'
            >{`${payload[0].name}: ${payload[0].value}日`}</Typography>
          </div>
        );
      }

      return null;
    };

    return (
      <div>
        <div aria-label='back-button'>
          <IconButton className={classes.backButton} onClick={this.handleBackButtonClick}>
            <BackIcon className={classes.backIcon} />
          </IconButton>
        </div>
        <Typography variant='h5' className={classes.title}>
          {selectJunior && `${selectJunior.name}さんの詳細`}
        </Typography>
        <div className={classes.feelingContainer}>
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
            onClick={this.handleMonthButtonClick}
          >
            1ヶ月ごと
          </Button>
          {this.state.isWeekButtonClicked === true ? (
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
                次の週
                {<KeyboardArrowRight />}
              </Button>
            </div>
          ) : (
            <div>
              <Button
                size='small'
                className={classes.previousButton}
                onClick={this.handlePreviousButtonClick}
              >
                {<KeyboardArrowLeft />}前の月
              </Button>
              <Button
                size='small'
                className={classes.nextButton}
                onClick={this.handleNextButtonClick}
              >
                次の月
                {<KeyboardArrowRight />}
              </Button>
            </div>
          )}
          <Typography variant='h5'>{`${period}の気分`}</Typography>
          <PieChart width={600} height={600}>
            <Pie
              data={data}
              cx={300}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={200}
              fill='#8884d8'
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsDetails);
