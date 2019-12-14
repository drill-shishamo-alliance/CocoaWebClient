import React from 'react';
import styles from './TableStyles';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';
import { Table, TableBody } from '@material-ui/core';
import TableItem from './TableItem';

const TableList: React.FC = () => {
  const classes = styles();
  const employees = useSelector<rootState, rootState['Employees']>(state => state.Employees);
  const listMoodOfEmployee = useSelector<rootState, rootState['ListMoodOfEmployee']>(
    state => state.ListMoodOfEmployee
  );

  return (
    <div className={classes.tableBody}>
      <Table className={classes.tableLayout}>
        <TableBody>
          {Object.values(listMoodOfEmployee).map(moodOfEmployee => (
            <TableItem
              employee={employees[moodOfEmployee.subordinate_id]}
              key={moodOfEmployee.subordinate_id}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableList;
