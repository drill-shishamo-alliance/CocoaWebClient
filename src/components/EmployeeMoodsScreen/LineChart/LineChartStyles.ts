import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    chartPosition: {
      flexBasis: '80%',
    },
    iconSize: {
      fontSize: 20,
    },
    customTooltip: {
      backgroundColor: 'white',
      padding: 3,
    },
  });

export default styles;
