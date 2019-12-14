import { WithStyles } from '@material-ui/core';
import MoodsState from 'src/states/Moods/Moods';
import styles from './LineChartStyles';
import CausesState from 'src/states/Causes/Causes';

type LineChartOwnProps = {
  punchLogs: { moodId: string; causeId: string }[];
};

export type LineChartConnectedProps = {
  moods: MoodsState;
  causes: CausesState;
};

type LineChartProps = WithStyles<typeof styles> & LineChartOwnProps & LineChartConnectedProps;

export default LineChartProps;
