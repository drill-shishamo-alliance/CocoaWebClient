import React from 'react';
import { Table, TableRow } from '@material-ui/core';
import { Header, Cell, EmployeePosition, EmployeeHeaderWrapper } from './TableStyles';
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
  const displayMonday = useSelector<rootState, rootState['displayDateState']['displayMonday']>(
    state => state.displayDateState.displayMonday
  );

  return (
    <Table>
      <Header>
        <TableRow>
          <Cell align='center'>
            <EmployeePosition>社員</EmployeePosition>
            <EmployeeHeaderWrapper>
              {returnHeaderText(displaySpan, displayTab, displayMonday).map(headerText => {
                return <h2 key={headerText}>{headerText}</h2>;
              })}
            </EmployeeHeaderWrapper>
          </Cell>
        </TableRow>
      </Header>
    </Table>
  );
};

export default TableHeader;
