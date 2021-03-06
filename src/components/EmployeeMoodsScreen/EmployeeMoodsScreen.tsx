import React from 'react';
import TableTab from './Table/TableTab';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableList';
import ChangeDisplayDateButton from './Table/ChangeDisplayDateButton';
import { Div, Paper } from './EmployeeMoodsScreenStyle';

// 社員さんの気分を表示させる画面のcomponent
const EmployeeMoodsScreen = () => {
  return (
    <Div>
      <ChangeDisplayDateButton />
      <TableTab />
      <Paper>
        <TableHeader />
        <TableBody />
      </Paper>
    </Div>
  );
};

export default EmployeeMoodsScreen;
