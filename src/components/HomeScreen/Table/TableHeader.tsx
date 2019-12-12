import React from 'react';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core';
import classNames from 'classnames';
import TableStyles from './TableStyles';
import { HeaderText } from './utils/HeaderText';

const TableHeader: React.FC = () => {
  const classes = TableStyles();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align='center' className={classNames(classes.cellContainer)}>
            <h2 className={classes.employeePosition}>社員</h2>
            {HeaderText().map(header => {
              return <h2 key={header}>{header}</h2>;
            })}
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default TableHeader;
