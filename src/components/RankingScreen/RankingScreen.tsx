import React from 'react';
import TableTab from './Table/TableTab';
import TableHeader from './Table/TableHeader';
// import TableBody from './Table/TableList';
import { Div, Paper } from './RankingScreenStyles';
import ChangeDisplayDateButton from '../EmployeeMoodsScreen/Table/ChangeDisplayDateButton';

// 社員さんの気分を表示させる画面のcomponent
const RankingScreen = () => {
  return (
    <Div>
      <ChangeDisplayDateButton />
      <TableTab />
      <Paper>
        <TableHeader />
      </Paper>
    </Div>
  );
};

export default RankingScreen;
