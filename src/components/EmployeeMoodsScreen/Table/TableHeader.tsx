import React from 'react';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core';
import TableStyles from './TableStyles';
import classNames from 'classnames';
import dayjs from 'dayjs';
import rootState from 'src/states/index';
import { useSelector } from 'react-redux';

const TableHeader: React.FC = () => {
  const classes = TableStyles();

  return (
    <Table>
      <TableHead className={classes().head}>
        <TableRow>
          <TableCell align='center' className={classNames(classes().cellContainer)}>
            <h2 className={classes().employeePosition}>社員</h2>
            {/* storeに保存された現在表示されている期間を取ってくる */}
            {employeeMoodsState
              .filter((_, index) => index === 0) // １週間分の日付データが欲しいのでindexをユーザ1人に絞る
              .map(employee =>
                Object.values(employee.week_moods[this.props.currentDisplayedDate.weekIndex]).map(
                  (day, index) => (
                    <div className={classNames(classes().columnContainer, classes().dataPosition)}>
                      {index === 0 ? (
                        <h2>
                          {dayjs(day.date)
                            .locale('ja')
                            .format('YYYY/MM/DD(dd)')}
                        </h2>
                      ) : (
                        <h2>
                          {dayjs(day.date)
                            .locale('ja')
                            .format('MM/DD(dd)')}
                        </h2>
                      )}
                    </div>
                  )
                )
              )}
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default TableHeader;
