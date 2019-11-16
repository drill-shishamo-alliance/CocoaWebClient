import React from 'react';
import { Table, TableRow } from '@material-ui/core';
import { Header, Cell, EmployeePosition } from './TableStyles';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';
import { returnHeaderText } from './utils/returnHeaderText';

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

  return (
    <Table>
      <Header>
        <TableRow>
          <Cell align='center'>
            <EmployeePosition>社員</EmployeePosition>
            {returnHeaderText(displaySpan, displayTab, displayDate).map(headerText => {
              return <h2 key={headerText}>{headerText}</h2>;
            })}
          </Cell>
        </TableRow>
      </Header>
    </Table>
  );
};

export default TableHeader;
