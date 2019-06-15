import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsStyles';
import JuniorFeelingsState from 'src/apis/JuniorFeelingsApi/JuniorFeelingsResponse';

export type JuniorFeelingsConnectedProps = {
  juniorFeelingsState: JuniorFeelingsState;
};

export type JuniorFeelingsDispatchProps = {
  getJuniorFeelingsRequest: (id?: number, accessToken?: string) => void;
};
type JuniorFeelingsProps = WithStyles<typeof styles> &
  JuniorFeelingsConnectedProps &
  JuniorFeelingsDispatchProps;

export default JuniorFeelingsProps;
