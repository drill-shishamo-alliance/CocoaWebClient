import React from 'react';
import TableTab from './Table/TableTab';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';
import Paper from '@material-ui/core/Paper';

// 社員さんの気分を表示させる画面のcomponent
const EmployeeMoodsScreen = () => {
  return (
    <div>
      <TableTab />
      <Paper>
        <TableHeader />
        <TableBody />
      </Paper>
    </div>
  );
};

export default EmployeeMoodsScreen;
