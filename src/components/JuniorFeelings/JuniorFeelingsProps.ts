import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsStyles';
import { JuniorFeeling } from 'src/states/JuniorFeelingsState';

export type JuniorFeelingsConnectedProps = {
  juniorFeelingsState: JuniorFeeling[];
};

type JuniorFeelingsProps = WithStyles<typeof styles> & JuniorFeelingsConnectedProps;

export default JuniorFeelingsProps;
