import React from 'react';
import { employee } from 'src/states/Employees/Employees';
import { TableIcon, Cell, EmployeePosition, DangerEmployeePosition } from './TableStyles';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';
import { TableRow } from '@material-ui/core';
import IconDisplay from '../IconDisplay/IconDisplay';

export type Props = {
  employee: employee;
};

const TableItem: React.FC<Props> = props => {
  const { employee } = props;
  console.log(employee);
  const listMoodOfEmployee = useSelector<rootState, rootState['ListMoodOfEmployee']>(
    state => state.ListMoodOfEmployee
  );
  const displaySpan = useSelector<rootState, rootState['displayDateState']['displaySpan']>(
    state => state.displayDateState.displaySpan
  );
  const moods =
    typeof listMoodOfEmployee[employee.id] === 'undefined'
      ? []
      : listMoodOfEmployee[employee.id].punch_logs; // 今回描画する社員さんの気分情報
  let moodIds: string[] = [];
  moods.forEach(mood => {
    // 気分のidのみを配列として抜き取る
    displaySpan.forEach(displayDate => {
      if (
        displayDate.getMonth() === mood.punched_at.getMonth() &&
        displayDate.getDate() === mood.punched_at.getDate()
      ) {
        moodIds.push(mood.mood_id);
      }
    });
  });

  return (
    <TableRow>
      {typeof listMoodOfEmployee[employee.id] !== 'undefined' ? (
        <Cell align='center'>
          {!listMoodOfEmployee[employee.id].is_danger && (
            <EmployeePosition>{employee.name}</EmployeePosition>
          )}
          {listMoodOfEmployee[employee.id].is_danger && (
            <DangerEmployeePosition>{employee.name}</DangerEmployeePosition>
          )}
          <TableIcon>
            {moodIds.map((moodId, index) => (
              <IconDisplay key={`icon${index}`} moodId={moodId} />
            ))}
          </TableIcon>
        </Cell>
      ) : (
        <Cell align='center'>
          <EmployeePosition>{employee.name}</EmployeePosition>
          <p>データがありません</p>
        </Cell>
      )}
    </TableRow>
  );
};

export default TableItem;
