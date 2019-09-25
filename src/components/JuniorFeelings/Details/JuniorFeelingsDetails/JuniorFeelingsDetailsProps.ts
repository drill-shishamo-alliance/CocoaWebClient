import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsDetatilsStyles';
import JuniorFeelingsState from 'src/states/JuniorFeelings/JuniorFeelingsState';
import Feelings from 'src/apis/JuniorFeelingsApi/FeelingsResponse/Feelings';
import { ScreenType } from '../../JuniorFeelings/ScreenType';

type JuniorFeelingsDetailsOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
  weekIndex: number;
};

export type JuniorFeelingsDetailsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState;
  feelings: Feelings[];
};

export type JuniorFeelingsDetailsDispatchProps = {
  getJuniorMonthFeelingsRequest: () => void;
};

type JuniorFeelingsDetailsProps = WithStyles<typeof styles> &
  JuniorFeelingsDetailsOwnProps &
  JuniorFeelingsDetailsConnectedProps &
  JuniorFeelingsDetailsDispatchProps;

export default JuniorFeelingsDetailsProps;
