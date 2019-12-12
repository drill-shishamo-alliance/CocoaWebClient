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
  })
);

export default TableStyles;
