import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { TableCell as TableCellMaterial } from '@material-ui/core';

const TableStyles = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: 'white',
    },
    employeePosition: {
      flexBasis: '20%',
      alignSelf: 'center',
    },
    tableBody: {
      overflow: 'scroll',
      height: '100%',
      // position: 'relative',
    },
    tableLayout: {
      overflow: 'flexed',
    },
    employeeName: {
      flexBasis: '20%',
      alignSelf: 'center',
      fontSize: 18,
    },
  })
);

export const HeaderCell = styled(TableCellMaterial)`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const TableCell = styled(TableCellMaterial)`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export default TableStyles;
