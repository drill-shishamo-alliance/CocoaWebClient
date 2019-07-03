import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: 20,
      overflowX: 'auto',
    },
    tableLayout: {
      overflow: 'flexed',
    },
    tableBody: {
      overflow: 'auto',
      height: 550,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    head: {
      backgroundColor: 'white',
      height: 100,
    },
    cellHeight: {
      height: 100,
    },
    columnContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    juniorPosition: {
      flexBasis: '20%',
      alignSelf: 'center',
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
  });

export default styles;
