import React from 'react';
import { Paper } from '@material-ui/core';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableList';

const HomeScreen = () => {
  return (
    <Paper>
      <TableHeader />
      <TableBody />
    </Paper>
  );
};

export default HomeScreen;
