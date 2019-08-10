import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsDetatilsStyles';
import JuniorFeelingsState from 'src/states/JuniorFeelings/JuniorFeelingsState';
import Feelings from 'src/apis/JuniorFeelingsApi/FeelingsResponse/Feelings';

export type JuniorFeelingsDetailsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState;
  feelings: Feelings[];
};

type JuniorFeelingsDetailsProps = WithStyles<typeof styles> & JuniorFeelingsDetailsConnectedProps;

export default JuniorFeelingsDetailsProps;
