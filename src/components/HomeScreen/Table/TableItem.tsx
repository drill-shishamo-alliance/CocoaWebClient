import React from 'react';
import { employee } from 'src/states/Employees/Employees';
import {
  TableIcon,
  Cell,
  EmployeePosition,
  DangerEmployeePosition,
  NotDataTextPosition,
} from './TableStyles';
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
  const punchLogs =
    typeof listMoodOfEmployee[employee.id] === 'undefined'
      ? []
      : listMoodOfEmployee[employee.id].punch_logs; // 今回描画する社員さんの気分情報

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
            {punchLogs.map((punchLog, index) => (
              <IconDisplay
                key={`icon${index}`}
                moodId={punchLog.mood_id}
                causeIds={punchLog.cause_ids}
              />
            ))}
          </TableIcon>
        </Cell>
      ) : (
        <Cell align='center'>
          <EmployeePosition>{employee.name}</EmployeePosition>
          <NotDataTextPosition>データがありません</NotDataTextPosition>
        </Cell>
      )}
    </TableRow>
  );
};

export default TableItem;
