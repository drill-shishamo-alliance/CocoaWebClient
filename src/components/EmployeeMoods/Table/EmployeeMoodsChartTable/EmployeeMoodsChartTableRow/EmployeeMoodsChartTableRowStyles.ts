import { makeStyles } from '@material-ui/core/styles';

const styles = () =>
  makeStyles({
    cellContainer: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    employeePosition: {
      flexBasis: '20%',
      alignSelf: 'center',
    },
  });

export default styles;
