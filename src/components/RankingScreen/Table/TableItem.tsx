import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { Cell, RankPosition, DepartmentPosition } from './TableStyles';

import rootState from 'src/states/index';
import { useSelector } from 'react-redux';
import { Department } from 'src/states/Departments/Departments';
import BarChart from '../BarChart/BarChart';

export type Props = {
  department: Department;
};

const TableItem: React.FC<Props> = props => {
  const { department } = props;
  const listMoodOfDepartment = useSelector<rootState, rootState['ListMoodOfDepartment']>(
    state => state.ListMoodOfDepartment
  );

  const moodsRatio =
    typeof listMoodOfDepartment[department.id] === 'undefined'
      ? {}
      : listMoodOfDepartment[department.id].moods_ratio;

  return (
    <TableRow>
      <Cell align='center'>
        <RankPosition>{'○位'}</RankPosition>
        <DepartmentPosition>{department.name}</DepartmentPosition>
        <BarChart moodsRatio={moodsRatio} />
      </Cell>
    </TableRow>
  );
};

export default TableItem;
