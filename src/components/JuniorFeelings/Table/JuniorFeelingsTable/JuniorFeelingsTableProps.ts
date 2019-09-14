import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsTableStyles';
import JuniorFeelingsState from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';
import { ScreenType } from '../../JuniorFeelings/ScreenType';

type JuniorFeelingsTableOwnProps = {
  switchScreen: (screenType: ScreenType) => void;
  setWeekIndex: (weekIndex: number) => void;
};

export type JuniorFeelingsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState[];
};

export type JuniorFeelingsDispatchProps = {
  selectJunior: (juniorFeelings: JuniorFeelings) => void;
  getJuniorFeelingsRequest: (id?: number, accessToken?: string) => void;
  getFeelingsRequest: (accessToken?: string) => void;
};
type JuniorFeelingsProps = WithStyles<typeof styles> &
  JuniorFeelingsTableOwnProps &
  JuniorFeelingsConnectedProps &
  JuniorFeelingsDispatchProps;

export default JuniorFeelingsProps;
