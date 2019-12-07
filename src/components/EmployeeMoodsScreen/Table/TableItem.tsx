import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styles from './TableStyles';
import { employee } from 'src/states/Employees/Employees';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';
import LineChart from 'src/container/LineChart';

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
  const moods =
    typeof listMoodOfEmployee[employee.id] === 'undefined'
      ? []
      : listMoodOfEmployee[employee.id].moods; // 今回描画する社員さんの気分情報
  let moodIds: string[] = [];
  moods.forEach(punchedMood => {
    // 気分のidのみを配列として抜き取る
    displaySpan.forEach(displayDate => {
      if (
        displayDate.getMonth() === punchedMood.punched_at.getMonth() &&
        displayDate.getDate() === punchedMood.punched_at.getDate()
      ) {
        moodIds.push(punchedMood.id);
      }
    });
  });

  return (
    <TableRow>
      <TableCell align='center' className={classes.cellContainer}>
        <div
          className={
            listMoodOfEmployee[employee.id].danger
              ? classes.employeeNameDanger
              : classes.employeeName
          }
        >
          {employee.name}
        </div>
        <LineChart moodIds={moodIds} />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
