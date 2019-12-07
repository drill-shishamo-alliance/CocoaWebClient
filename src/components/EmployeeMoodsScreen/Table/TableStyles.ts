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
      height: 500,
      position: 'relative',
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
    headerPosition: {
      flexBasis: '20%',
      alignSelf: 'center',
    },
    employeeName: {
      flexBasis: '20%',
      alignSelf: 'center',
      fontSize: 18,
    },
    employeeNameDanger: {
      flexBasis: '20%',
      alignSelf: 'center',
      color: 'red',
      fontSize: 18,
      fontWeight: 'bold',
    },
    dataPosition: {
      flexBasis: '16%',
      alignSelf: 'center',
    },
    cellContainer: {
      display: 'flex',
      justifyContent: 'space-around',
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
      top: '13%',
      right: '5%',
    },
    previousButton: {
      position: 'absolute',
      top: '13%',
      right: '11%',
    },
    notDataTextPosition: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      textAlign: 'center',
    },
  })
);

export default TableStyles;
