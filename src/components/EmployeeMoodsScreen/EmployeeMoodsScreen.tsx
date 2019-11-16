import React from 'react';
import TableTab from './Table/TableTab';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableList';
import Paper from '@material-ui/core/Paper';
import ChangeDisplayDateButton from './Table/ChangeDisplayDateButton';

// 社員さんの気分を表示させる画面のcomponent
const EmployeeMoodsScreen = () => {
  return (
    <div>
      <ChangeDisplayDateButton />
      <TableTab />
      <Paper>
        <TableHeader />
        <TableBody />
      </Paper>
    </div>
  );
};

export default EmployeeMoodsScreen;
