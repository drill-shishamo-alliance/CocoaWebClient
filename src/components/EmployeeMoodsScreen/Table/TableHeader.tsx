import React from 'react';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core';
import TableStyles from './TableStyles';
import classNames from 'classnames';
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
  const classes = TableStyles();

  return (
    <Table>
      <TableHead className={classes.head}>
        <TableRow>
          <TableCell align='center' className={classNames(classes.cellContainer)}>
            <h2 className={classes.employeePosition}>社員</h2>
            {returnHeaderText(displaySpan, displayTab).map(headerText => {
              return <h2>{headerText}</h2>;
            })}
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default TableHeader;
