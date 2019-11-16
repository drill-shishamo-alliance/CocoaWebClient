import * as React from 'react';
import { TableStyle } from './TableStyles';
import { Table, TableBody } from '@material-ui/core';
import TableItem from './TableItem';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

const TableList: React.FC = () => {
  const employees = useSelector<rootState, rootState['Employees']>(state => state.Employees); // storeから社員情報を取得してくる

  return (
    <TableStyle>
      <Table>
        <TableBody>
          {Object.values(employees).map(employee => (
            <TableItem employee={employee} key={employee.id} />
          ))}
        </TableBody>
      </Table>
    </TableStyle>
  );
};

export default TableList;
