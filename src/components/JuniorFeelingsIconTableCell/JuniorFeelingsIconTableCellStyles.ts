import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    iconSize: {
      fontSize: 40,
    },
  });

export default styles;
