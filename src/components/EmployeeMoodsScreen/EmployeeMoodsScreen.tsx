import React from 'react';
import TableTab from './Table/TableTab';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableList';
import Paper from '@material-ui/core/Paper';
import ChangeDisplayDateButton from './Table/ChangeDisplayDateButton';
import { Div } from './EmployeeMoodsScreenStyle';

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
