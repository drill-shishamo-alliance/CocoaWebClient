import React from 'react';
import { Table, TableRow } from '@material-ui/core';
import { Header, Cell, EmployeePosition, EmployeeHeaderWrapper } from './TableStyles';
import { HeaderText } from './utils/HeaderText';
import { GetPastFiveDays } from './utils/GetPastFiveDays';

const TableHeader: React.FC = () => {
  const pastFiveDays = GetPastFiveDays();

  return (
    <Table>
      <Header>
        <TableRow>
          <Cell align='center'>
            <EmployeePosition>社員</EmployeePosition>
            <EmployeeHeaderWrapper>
              {HeaderText(pastFiveDays).map(header => {
                return <h2 key={header}>{header}</h2>;
              })}
            </EmployeeHeaderWrapper>
          </Cell>
        </TableRow>
      </Header>
    </Table>
  );
};

export default TableHeader;
