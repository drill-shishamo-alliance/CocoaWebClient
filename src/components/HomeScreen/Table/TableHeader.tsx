import React from 'react';
import { Table, TableHead, TableRow } from '@material-ui/core';
import styles, { HeaderCell } from './TableStyles';
import { HeaderText } from './utils/HeaderText';
import { GetPastFiveDays } from './utils/GetPastFiveDays';

const TableHeader: React.FC = () => {
  const classes = styles();
  const pastFiveDays = GetPastFiveDays();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <HeaderCell align='center'>
            <h2 className={classes.employeePosition}>社員</h2>
            {HeaderText(pastFiveDays).map(header => {
              return <h2 key={header}>{header}</h2>;
            })}
          </HeaderCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default TableHeader;
