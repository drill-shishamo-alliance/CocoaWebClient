import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { Cell, EmployeePosition } from './TableStyles';
import LineChart from '../LineChart/LineChart';
import { employee } from 'src/states/Employees/Employees';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

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
  const moods = listMoodOfEmployee[employee.id].moods; // 今回描画する社員さんの気分情報
  let moodIds: string[] = [];
  moods.forEach(panchedMood => {
    // 気分のidのみを配列として抜き取る
    displaySpan.forEach(date => {
      if (date === panchedMood.punched_at) {
        moodIds.push(panchedMood.id);
      }
    });
  });

  return (
    <TableRow>
      <Cell align='center'>
        <EmployeePosition>{employee.name}</EmployeePosition>
        <LineChart moodIds={moodIds} />
      </Cell>
    </TableRow>
  );
};

export default TableItem;
