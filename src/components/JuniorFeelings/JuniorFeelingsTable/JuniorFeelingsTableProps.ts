import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsTableStyles';
import JuniorFeelingsState from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

export type JuniorFeelingsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState[];
};

export type JuniorFeelingsDispatchProps = {
  getJuniorFeelingsRequest: (id?: number, accessToken?: string) => void;
  getFeelingsRequest: (accessToken?: string) => void;
};
type JuniorFeelingsProps = WithStyles<typeof styles> &
  JuniorFeelingsConnectedProps &
  JuniorFeelingsDispatchProps;

export default JuniorFeelingsProps;
