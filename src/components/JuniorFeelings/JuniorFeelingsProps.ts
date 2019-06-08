import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsStyles';
import { JuniorFeelingsState } from 'src/states/JuniorFeelingsState';

export type JuniorFeelingsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState;
};

type JuniorFeelingsProps = WithStyles<typeof styles> & JuniorFeelingsConnectedProps;

export default JuniorFeelingsProps;
