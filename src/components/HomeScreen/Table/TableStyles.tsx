import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const TableStyles = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: 'white',
    },
    cellContainer: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    employeePosition: {
      flexBasis: '20%',
      alignSelf: 'center',
    },
    tableBody: {
      overflow: 'auto',
      height: 500,
      position: 'relative',
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

export default TableStyles;
