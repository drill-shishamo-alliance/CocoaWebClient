import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    cellContainer: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    juniorPosition: {
      flexBasis: '20%',
      alignSelf: 'center',
    },
  });

export default styles;
