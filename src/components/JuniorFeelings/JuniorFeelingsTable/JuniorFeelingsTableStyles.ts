import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: 100,
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    cellHeight: {
      height: 100,
    },
    head: {
      backgroundColor: 'white',
      position: 'fixed',
      top: 100,
      zIndex: 10,
      width: '100%',
      height: 100,
    },
    columnContainer: {
      display: 'flex',
      flexDirection: 'column',
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
