import { makeStyles } from '@material-ui/core/styles';

const lineChartStyles = () =>
  makeStyles({
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

export default lineChartStyles;
