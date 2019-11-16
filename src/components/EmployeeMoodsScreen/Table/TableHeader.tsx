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
  const displayDate = useSelector<rootState, rootState['displayDateState']['displayDate']>(
    state => state.displayDateState.displayDate
  );
  const classes = TableStyles();

  return (
    <Table>
      <TableHead className={classes.head}>
        <TableRow>
          <TableCell align='center' className={classNames(classes.cellContainer)}>
            <h2 className={classes.employeePosition}>社員</h2>
            {returnHeaderText(displaySpan, displayTab, displayDate).map(headerText => {
              return <h2 key={headerText}>{headerText}</h2>;
            })}
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default TableHeader;
