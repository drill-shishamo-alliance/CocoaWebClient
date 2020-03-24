import React, { useEffect } from 'react';
import TableTab from './Table/TableTab';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableList';
import ChangeDisplayDateButton from './Table/ChangeDisplayDateButton';
import { Div, Paper } from './EmployeeMoodsScreenStyle';
import { useSelector, useDispatch } from 'react-redux';
import RootState from 'src/states';
import {
  resetListMoodOfEmployee,
  getListMoodOfEmployee,
} from 'src/actions/ListMoodOfEmployee/ActionCreator';
import {
  convertDateToUnixForBegin,
  convertDateToUnixForEnd,
} from 'src/utilsLogic/Date/ConvertDateToUnix';

// 社員さんの気分を表示させる画面のcomponent
const EmployeeMoodsScreen = () => {
  const dispatch = useDispatch();
  const employees = useSelector<RootState, RootState['Employees']>(state => state.Employees);
  const displaySpan = useSelector<RootState, RootState['displayDateState']['displaySpan']>(
    state => state.displayDateState.displaySpan
  );
  const begin_date = convertDateToUnixForBegin(displaySpan[0]);
  const end_date = convertDateToUnixForEnd(displaySpan[displaySpan.length - 1]);
  useEffect(() => {
    dispatch(resetListMoodOfEmployee());
    Object.values(employees).forEach(employee => {
      dispatch(
        getListMoodOfEmployee.request({ employee_id: employee.id, begin_date, end_date: end_date })
      );
    });
  }, [displaySpan]);
  return (
    <Div>
      <ChangeDisplayDateButton />
      <TableTab />
      <Paper>
        <TableHeader />
        <TableBody />
      </Paper>
    </Div>
  );
};

export default EmployeeMoodsScreen;
