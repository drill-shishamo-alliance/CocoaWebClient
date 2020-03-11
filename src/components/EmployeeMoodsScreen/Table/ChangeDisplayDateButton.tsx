import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { PrevButton, NextButton } from './TableStyles';

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
        <PrevButton size='small' onClick={handlePreviousButtonClick}>
          {<KeyboardArrowLeft />}前月
        </PrevButton>
        <NextButton size='small' onClick={handleNextButtonClick}>
          翌月{<KeyboardArrowRight />}
        </NextButton>
      </div>
    );
  } else if (displayTab === tabName.week) {
    return (
      <div>
        <PrevButton size='small' onClick={handlePreviousButtonClick}>
          {<KeyboardArrowLeft />}前週
        </PrevButton>
        <NextButton size='small' onClick={handleNextButtonClick}>
          翌週{<KeyboardArrowRight />}
        </NextButton>
      </div>
    );
  } else {
    return <div>タブの名前がおかしいです</div>;
  }
};

export default ChangeDisplayDateButton;
