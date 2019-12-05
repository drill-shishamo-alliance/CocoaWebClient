import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const TableStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabSize: {
      flexGrow: 1,
      maxWidth: 320,
    },
    root: {
      width: '100%',
      marginTop: 5,
      overflowX: 'auto',
    },
    tableLayout: {
      overflow: 'flexed',
    },
    tableBody: {
      overflow: 'auto',
      height: 'auto',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    head: {
      backgroundColor: 'white',
    },
    columnContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    date: {
      marginRight: '12%',
    },
    employeePosition: {
      flexBasis: '20%',
      alignSelf: 'center',
    },
    dataPosition: {
      flexBasis: '16%',
      alignSelf: 'center',
    },
    cellContainer: {
      display: 'flex',
    },
    datePosition: {
      marginTop: -8,
    },
    iconSize: {
      fontSize: 40,
    },
    sunnyColor: {
      color: '#ffa500', // orange
    },
    moonColor: {
      color: '#708090', // slategray
    },
    iconMargin: {
      margin: 10,
    },
    nextButton: {
      position: 'absolute',
      top: '10%',
      right: '5%',
    },
    previousButton: {
      position: 'absolute',
      top: '10%',
      right: '11%',
    },
  })
);

export default TableStyles;
