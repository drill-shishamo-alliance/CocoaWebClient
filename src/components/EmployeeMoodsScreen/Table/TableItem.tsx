import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styles from './TableStyles';
import LineChart from '../LineChart/LineChart';
import { employee } from 'src/states/Employees/Employees';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

export type Props = {
  employee: employee;
};

const TableItem: React.FC<Props> = props => {
  const classes = styles();
  const { employee } = props;
  const listMoodOfEmployee = useSelector<rootState, rootState['ListMoodOfEmployee']>(
    state => state.ListMoodOfEmployee
  );
  const displaySpan = useSelector<rootState, rootState['displayDateState']['displaySpan']>(
    state => state.displayDateState.displaySpan
  );
  const moods = listMoodOfEmployee[employee.id].moods; // 今回描画する社員さんの気分情報
  const moodIds = moods.flatMap(panchedMood => {
    // 気分のidのみを配列として抜き取る
    return displaySpan.map(date => {
      if (date === panchedMood.punched_at) {
        return panchedMood.id;
      } else {
        return undefined;
      }
    }) as string[];
  });

  return (
    <TableRow>
      <TableCell align='center' className={classes.cellContainer}>
        <div className={classes.employeePosition}>{employee.name}</div>
        <LineChart moodIds={moodIds} />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
