import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsDetatilsStyles';
import JuniorFeelingsState from 'src/states/JuniorFeelings/JuniorFeelingsState';

export type JuniorFeelingsDetailsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState;
};

type JuniorFeelingsDetailsProps = WithStyles<typeof styles> & JuniorFeelingsDetailsConnectedProps;

export default JuniorFeelingsDetailsProps;
