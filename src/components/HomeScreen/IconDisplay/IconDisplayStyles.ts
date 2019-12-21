import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const IconDisplayStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    iconContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    iconSize: {
      fontSize: 40,
    },
    dataPosition: {
      flexBasis: '16%',
      alignSelf: 'center',
    },
  })
);

export default IconDisplayStyles;
