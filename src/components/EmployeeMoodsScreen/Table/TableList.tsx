import * as React from 'react';
import styles from './TableStyles';
import { Table, TableBody } from '@material-ui/core';
import TableItem from './TableItem';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

const TableList: React.FC = () => {
  const classes = styles();
  const employees = useSelector<rootState, rootState['Employees']>(state => state.Employees); // storeから社員情報を取得してくる
  const listMoodOfEmployee = useSelector<rootState, rootState['ListMoodOfEmployee']>(
    state => state.ListMoodOfEmployee
  );

  return (
    <div className={classes.tableBody}>
      {Object.keys(listMoodOfEmployee).length > 0 ? (
        <Table className={classes.tableLayout}>
          <TableBody>
            {Object.values(listMoodOfEmployee).map(moodOfEmployee => (
              <TableItem
                employee={employees[moodOfEmployee.subordinate_id]}
                key={moodOfEmployee.subordinate_id}
              />
            ))}
            {/* {Object.values(listMoodOfEmployee).map(moodOfEmployee => (
            <TableItem
              employee={employees[moodOfEmployee.subordinate_id]}
              key={moodOfEmployee.subordinate_id}
            />
          ))} */}
          </TableBody>
        </Table>
      ) : (
        <div className={classes.notDataTextPosition}>データがありません</div>
      )}
    </div>
  );
};

export default TableList;
