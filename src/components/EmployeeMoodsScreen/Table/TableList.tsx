import * as React from 'react';
import { NotDataTextPosition, TableStyle } from './TableStyles';
import { Table, TableBody } from '@material-ui/core';
import TableItem from './TableItem';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

const TableList: React.FC = () => {
  const employees = useSelector<rootState, rootState['Employees']>(state => state.Employees); // storeから社員情報を取得してくる
  const listMoodOfEmployee = useSelector<rootState, rootState['ListMoodOfEmployee']>(
    state => state.ListMoodOfEmployee
  );

  console.log(listMoodOfEmployee);

  return (
    <TableStyle>
      {Object.keys(listMoodOfEmployee).length > 0 ? (
        <Table>
          <TableBody>
            {Object.values(listMoodOfEmployee).map(moodOfEmployee => (
              <TableItem
                employee={employees[moodOfEmployee.subordinate_id]}
                key={moodOfEmployee.subordinate_id}
              />
            ))}
          </TableBody>
        </Table>
      ) : (
        <NotDataTextPosition>データがありません</NotDataTextPosition>
      )}
    </TableStyle>
  );
};

export default TableList;
