import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { Cell, EmployeePosition, DangerEmployeePosition } from './TableStyles';
import LineChart from '../LineChart/LineChart';
import { employee } from 'src/states/Employees/Employees';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';
import { PunchLog } from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';

export type Props = {
  employee: employee;
};

const TableItem: React.FC<Props> = props => {
  const { employee } = props;
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
  let displayPunchLogs: PunchLog[] = [];
  punchLogs.forEach(punchLog => {
    displaySpan.forEach(displayDate => {
      if (
        displayDate.getMonth() === punchLog.punched_at.getMonth() &&
        displayDate.getDate() === punchLog.punched_at.getDate()
      ) {
        displayPunchLogs.push(punchLog);
      }
    });
  });

  return (
    <TableRow>
      {listMoodOfEmployee[employee.id] ? (
        <Cell align='center'>
          {!listMoodOfEmployee[employee.id].is_danger && (
            <EmployeePosition>{employee.name}</EmployeePosition>
          )}
          {listMoodOfEmployee[employee.id].is_danger && (
            <DangerEmployeePosition>{employee.name}</DangerEmployeePosition>
          )}
          <LineChart punchLogs={displayPunchLogs} />
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
