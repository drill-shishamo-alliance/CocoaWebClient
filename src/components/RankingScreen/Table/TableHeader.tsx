import React from 'react';
import { Table, TableRow } from '@material-ui/core';
import { Header, Cell, DepartmentPosition, RankPosition, DatePosition } from './TableStyles';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';
import { HeaderText } from './utils/HeaderText';

const TableHeader: React.FC = () => {
  const displayTab = useSelector<rootState, rootState['displayDateState']['displayTab']>(
    state => state.displayDateState.displayTab
  );
  const displaySpan = useSelector<rootState, rootState['displayDateState']['displaySpan']>(
    state => state.displayDateState.displaySpan
  );
  const displayDate = useSelector<rootState, rootState['displayDateState']['displayDate']>(
    state => state.displayDateState.displayDate
  );

  const headerText = HeaderText(displaySpan, displayTab, displayDate);

  return (
    <Table>
      <Header>
        <TableRow>
          <Cell align='center'>
            <RankPosition>順位</RankPosition>
            <DepartmentPosition>部署</DepartmentPosition>
            <DatePosition>{headerText}</DatePosition>
          </Cell>
        </TableRow>
      </Header>
    </Table>
  );
};

export default TableHeader;
