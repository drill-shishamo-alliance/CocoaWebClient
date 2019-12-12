import React from 'react';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core';
import classNames from 'classnames';
import styles from './TableStyles';
import { HeaderText } from './utils/HeaderText';
import { GetPastFiveDays } from './utils/GetPastFiveDays';

const TableHeader: React.FC = () => {
  const classes = styles();
  const pastFiveDays = GetPastFiveDays();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align='center' className={classNames(classes.cellContainer)}>
            <h2 className={classes.employeePosition}>社員</h2>
            {HeaderText(pastFiveDays).map(header => {
              return <h2 key={header}>{header}</h2>;
            })}
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default TableHeader;
