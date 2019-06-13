import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsStyles';
import { JuniorFeeling } from 'src/states/JuniorFeelingsState';

export type JuniorFeelingsConnectedProps = {
  juniorFeelingsState: JuniorFeeling[];
};

export type JuniorFeelingsDispatchProps = {
  getJuniorFeelingsRequest: (id?: number, accessToken?: string) => void;
};
type JuniorFeelingsProps = WithStyles<typeof styles> &
  JuniorFeelingsConnectedProps &
  JuniorFeelingsDispatchProps;

export default JuniorFeelingsProps;
