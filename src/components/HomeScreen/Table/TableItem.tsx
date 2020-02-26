import React from 'react';
import { employee } from 'src/states/Employees/Employees';
import { TableCell, Cell } from './TableStyles';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';
import { TableRow } from '@material-ui/core';
import IconDisplay from '../IconDisplay/IconDisplay';
import styled from 'styled-components';

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
  const punchLogs =
    typeof listMoodOfEmployee[employee.id] === 'undefined'
      ? []
      : listMoodOfEmployee[employee.id].punch_logs; // 今回描画する社員さんの気分情報

  return (
    <TableRow>
      {typeof listMoodOfEmployee[employee.id] !== 'undefined' ? (
        <TableCell align='center'>
          {!listMoodOfEmployee[employee.id].is_danger && (
            <EmployeePosition>{employee.name}</EmployeePosition>
          )}
          {listMoodOfEmployee[employee.id].is_danger && (
            <DangerEmployeePosition>{employee.name}</DangerEmployeePosition>
          )}
          {punchLogs.map((punchLog, index) => (
            <IconDisplay
              key={`icon${index}`}
              moodId={punchLog.mood_id}
              causeIds={punchLog.cause_ids}
            />
          ))}
        </TableCell>
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

const EmployeePosition = styled('h2')`
  flex-basis: 20%;
  align-self: center;
  grid-row: 1;
`;

const DangerEmployeePosition = styled('h2')`
  flex-basis: 20%;
  align-self: center;
  grid-row: 1;
  color: red;
`;
