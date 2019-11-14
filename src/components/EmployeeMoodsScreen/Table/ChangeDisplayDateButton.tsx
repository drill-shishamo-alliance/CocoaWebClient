import React from 'react';
import { Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import TableStyles from './TableStyles';

import { useDispatch, useSelector } from 'react-redux';
import { tabName } from 'src/states/DisplayDate/DisplayDate';
import RootState from 'src/states';
import {
  previousWeek,
  changeWeekSpanButtonClicked,
  previousMonth,
  nextWeek,
  nextMonth,
  changeMonthButtonClicked,
} from 'src/actions/DisplayDate/DisplayDateActionCreator';

const ChangeDisplayDateButton: React.FC = () => {
  const classes = TableStyles();
  const dispatch = useDispatch();
  const displayTab = useSelector<RootState, RootState['displayDateState']['displayTab']>(
    state => state.displayDateState.displayTab
  ); // storeから月と週のどっちのタブが表示されているかを取得する

  const handlePreviousButtonClick = () => {
    if (displayTab === tabName.week) {
      dispatch(changeWeekSpanButtonClicked(previousWeek));
    } else if (displayTab === tabName.month) {
      dispatch(changeMonthButtonClicked(previousMonth));
    }
  };

  const handleNextButtonClick = () => {
    if (displayTab === tabName.week) {
      dispatch(changeWeekSpanButtonClicked(nextWeek));
    } else if (displayTab === tabName.month) {
      dispatch(changeMonthButtonClicked(nextMonth));
    }
  };

  if (displayTab === tabName.month) {
    return (
      <div>
        <Button size='small' className={classes.previousButton} onClick={handlePreviousButtonClick}>
          {<KeyboardArrowLeft />}前の月
        </Button>
        <Button size='small' className={classes.nextButton} onClick={handleNextButtonClick}>
          次の月{<KeyboardArrowRight />}
        </Button>
      </div>
    );
  } else if (displayTab === tabName.week) {
    return (
      <div>
        <Button size='small' className={classes.previousButton} onClick={handlePreviousButtonClick}>
          {<KeyboardArrowLeft />}前の週
        </Button>
        <Button size='small' className={classes.nextButton} onClick={handleNextButtonClick}>
          次の週{<KeyboardArrowRight />}
        </Button>
      </div>
    );
  } else {
    return <div>タブの名前がおかしいです</div>;
  }
};

export default ChangeDisplayDateButton;
