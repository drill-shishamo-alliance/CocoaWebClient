import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsDetatilsStyles';
import JuniorFeelingsState from 'src/states/JuniorFeelings/JuniorFeelingsState';
import Feelings from 'src/apis/JuniorFeelingsApi/FeelingsResponse/Feelings';
import { ScreenType } from '../../JuniorFeelings/ScreenType';

type JuniorFeelingsDetailsOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
};

export type JuniorFeelingsDetailsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState;
  feelings: Feelings[];
};

type JuniorFeelingsDetailsProps = WithStyles<typeof styles> &
  JuniorFeelingsDetailsOwnProps &
  JuniorFeelingsDetailsConnectedProps;

export default JuniorFeelingsDetailsProps;
