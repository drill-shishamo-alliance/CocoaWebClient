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
    veryDissatisfiedColor: {
      color: '#7E8B8C', // flat gray dark
    },
    dissatisfiedColor: {
      color: '#2880BA', // flat skyblue dark
    },
    normalColor: {
      color: '#E57D22', // flat orange
    },
    satisfiedColor: {
      color: '#1ABC9C', // flat mint
    },
    verySatisfiedColor: {
      color: '#EF7079', // flat watermelon
    },
  });

export default styles;
