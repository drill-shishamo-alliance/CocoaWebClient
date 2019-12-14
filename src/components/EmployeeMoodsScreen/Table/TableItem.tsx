import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styles from './TableStyles';
import { employee } from 'src/states/Employees/Employees';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';
import { PunchLog } from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';
import LineChart from '../LineChart/LineChart';

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
        <LineChart punchLogs={displayPunchLogs} />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
