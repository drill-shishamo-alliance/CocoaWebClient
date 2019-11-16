import * as React from 'react';
import styles from './TableStyles';
import { Table, TableBody } from '@material-ui/core';
import TableItem from './TableItem';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

const TableList: React.FC = () => {
  const classes = styles();
  const employees = useSelector<rootState, rootState['Employees']>(state => state.Employees); // storeから社員情報を取得してくる

  return (
    <div className={classes.tableBody}>
      <Table className={classes.tableLayout}>
        <TableBody>
          {Object.values(employees).map(employee => (
            <TableItem employee={employee} key={employee.id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableList;
