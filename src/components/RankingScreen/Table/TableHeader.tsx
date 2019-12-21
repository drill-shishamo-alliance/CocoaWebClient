import React from 'react';
import { Table, TableRow } from '@material-ui/core';
import { Header, Cell, DepartmentPosition, RankPosition, DatePosition } from './TableStyles';

const TableHeader: React.FC = () => {
  return (
    <Table>
      <Header>
        <TableRow>
          <Cell align='center'>
            <RankPosition>順位</RankPosition>
            <DepartmentPosition>部署</DepartmentPosition>
            <DatePosition>12月16日〜12月20日</DatePosition>
            {/* <EmployeeHeaderWrapper>
              {returnHeaderText(displaySpan, displayTab, displayDate).map(headerText => {
                return <h2 key={headerText}>{headerText}</h2>;
              })}
            </EmployeeHeaderWrapper> */}
          </Cell>
        </TableRow>
      </Header>
    </Table>
  );
};

export default TableHeader;
