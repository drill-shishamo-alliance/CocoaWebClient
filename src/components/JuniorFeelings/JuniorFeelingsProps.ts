import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsStyles';
import JuniorFeelingsState from 'src/apis/JuniorFeelingsApi/JuniorFeelingsResponse';
import FeelingsState from 'src/apis/FeelingsApi/FeelingsResponse';

export type JuniorFeelingsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState[];
  feelingState: FeelingsState[];
};

export type JuniorFeelingsDispatchProps = {
  getJuniorFeelingsRequest: (id?: number, accessToken?: string) => void;
  getFeelingsRequest: (accessToken?: string) => void;
};
type JuniorFeelingsProps = WithStyles<typeof styles> &
  JuniorFeelingsConnectedProps &
  JuniorFeelingsDispatchProps;

export default JuniorFeelingsProps;
