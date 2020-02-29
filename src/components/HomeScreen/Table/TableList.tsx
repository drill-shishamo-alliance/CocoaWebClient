import React from 'react';
import { TableStyle } from './TableStyles';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';
import { Table, TableBody } from '@material-ui/core';
import TableItem from './TableItem';

const TableList: React.FC = () => {
  const employees = useSelector<rootState, rootState['Employees']>(state => state.Employees);
  const listMoodOfEmployee = useSelector<rootState, rootState['ListMoodOfEmployee']>(
    state => state.ListMoodOfEmployee
  );

  return (
    <TableStyle>
      <Table>
        <TableBody>
          {Object.keys(listMoodOfEmployee).length > 0
            ? Object.values(listMoodOfEmployee).map(moodOfEmployee => (
                <TableItem
                  employee={employees[moodOfEmployee.employee_id]}
                  key={moodOfEmployee.employee_id}
                />
              ))
            : Object.values(employees).map(employee => (
                <TableItem employee={employee} key={employee.id} />
              ))}
        </TableBody>
      </Table>
    </TableStyle>
  );
};

export default TableList;
