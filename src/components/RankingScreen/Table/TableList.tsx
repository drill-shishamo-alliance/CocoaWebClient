import React from 'react';
import { NotDataTextPosition, TableStyle } from './TableStyles';
import { Table, TableBody } from '@material-ui/core';
import TableItem from './TableItem';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

const TableList: React.FC = () => {
  const departments = useSelector<rootState, rootState['Departments']>(state => state.Departments);
  const listMoodOfDepartment = useSelector<rootState, rootState['ListMoodOfDepartment']>(
    state => state.ListMoodOfDepartment
  );

  return (
    <TableStyle>
      {Object.keys(listMoodOfDepartment).length > 0 ? (
        <Table>
          <TableBody>
            {Object.values(listMoodOfDepartment).map((moodOfDepartment, index) => (
              <TableItem
                department={departments[moodOfDepartment.id]}
                rank={index + 1}
                tableItemIndex={index}
                key={moodOfDepartment.id}
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
