import * as React from 'react';
import styles from './TableStyles';
import { Table, TableBody as TableBodyMaterial } from '@material-ui/core';
import TableItem from './TableItem';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

const TableBody: React.FC = () => {
  const classes = styles();
  const currentTab = useSelector((state: rootState) => state.currentDisplayedDateState.currentTab); // storeから現在表示されているタブを取得してくる
  const employees = useSelector((state: rootState) => state.Employees);

  return (
    <div className={classes().tableBody}>
      <Table className={classes().tableLayout}>
        <TableBodyMaterial>
          {Object.values(employees).map(employee =>
            currentTab === 0 ? (
              <TableItem employee={employee} />
            ) : currentTab === 1 ? (
              <TableItem employee={employee} />
            ) : (
              <div></div>
            )
          )}
        </TableBodyMaterial>
      </Table>
    </div>
  );
};

export default TableBody;
