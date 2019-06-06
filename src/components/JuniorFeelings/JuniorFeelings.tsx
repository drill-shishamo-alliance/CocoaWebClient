import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table, TableCellRenderer, TableHeaderProps } from 'react-virtualized';

const styles = (theme: Theme) =>
  createStyles({
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    tableRow: {
      cursor: 'pointer',
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
    },
    tableCell: {
      flex: 1,
    },
    noClick: {
      cursor: 'initial',
    },
  });

interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width: number;
}

interface Row {
  index: number;
}

interface JuniorFeelingsTableProps extends WithStyles<typeof styles> {
  columns: ColumnData[];
  headerHeight: number;
  onRowClick?: () => void;
  rowCount: number;
  rowGetter: (row: Row) => Data;
  rowHeight: number;
}

class JuniorFeelings extends React.PureComponent<JuniorFeelingsTableProps> {
  static defaultProps = {
    headerHeight: 64,
    rowHeight: 64,
  };

  getRowClassName = ({ index }: Row) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer: TableCellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }: TableHeaderProps & { columnIndex: number }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table height={height} width={width} {...tableProps} rowClassName={this.getRowClassName}>
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

(JuniorFeelings as any).propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(JuniorFeelings);

// ---

interface Data {
  id: number;
  junior: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
}
type Sample = [string, number, number, number, number, number];

const sample: Sample[] = [
  ['髙橋 佑太', 10, 16.0, 24, 6.0, 5.0],
  ['戸澤 涼', 159, 6.0, 24, 4.0, 5.0],
  ['若林 勇汰', 237, 9.0, 37, 4.3, 5.0],
  ['岡田 将太朗', 262, 16.0, 24, 6.0, 5.0],
  ['白幡 祐叶', 305, 3.7, 67, 4.3, 5.0],
];

function createData(
  id: number,
  junior: string,
  monday: number,
  tuesday: number,
  wednesday: number,
  thursday: number,
  friday: number,
): Data {
  return { id, junior, monday, tuesday, wednesday, thursday, friday };
}

const rows: Data[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 650, width: '100%' }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 300,
            label: 'Junior',
            dataKey: 'junior',
          },
          {
            width: 180,
            label: '6/01',
            dataKey: 'monday',
            numeric: true,
          },
          {
            width: 180,
            label: '6/02',
            dataKey: 'tuesday',
            numeric: true,
          },
          {
            width: 180,
            label: '6/03',
            dataKey: 'wednesday',
            numeric: true,
          },
          {
            width: 180,
            label: '6/04',
            dataKey: 'thursday',
            numeric: true,
          },
          {
            width: 180,
            label: '6/05',
            dataKey: 'friday',
            numeric: true,
          },
        ]}
      />
    </Paper>
  );
}

export default ReactVirtualizedTable;