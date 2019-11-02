import React from 'react';
import { Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import TableStyles from './TableStyles';
import {
  previousWeek,
  nextWeek,
} from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateActionCreator';
import { useDispatch } from 'react-redux';

const ChangeDisplayDate: React.FC = () => {
  const classes = TableStyles();
  const dispatch = useDispatch();
  const currentDisplayedTab = true; // storeから月と週のどっちのタブが表示されているかを取得する

  const handlePreviousButtonClick = () => {
    dispatch(previousWeek());
  };

  const handleNextButtonClick = () => {
    dispatch(nextWeek());
  };

  return currentDisplayedTab ? (
    <div>
      <Button size='small' className={classes().previousButton}>
        {<KeyboardArrowLeft />}前の月
      </Button>
      <Button size='small' className={classes().nextButton}>
        次の月{<KeyboardArrowRight />}
      </Button>
    </div>
  ) : (
    <div>
      <Button size='small' className={classes().previousButton} onClick={handlePreviousButtonClick}>
        {<KeyboardArrowLeft />}前の週
      </Button>
      <Button size='small' className={classes().nextButton} onClick={handleNextButtonClick}>
        次の週{<KeyboardArrowRight />}
      </Button>
    </div>
  );
};
