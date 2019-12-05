import { WithStyles } from '@material-ui/core';
import MoodsState from 'src/states/Moods/Moods';
import styles from './LineChartStyles';

type LineChartOwnProps = {
  moodIds: string[];
};

export type LineChartConnectedProps = {
  moods: MoodsState;
};

type LineChartProps = WithStyles<typeof styles> & LineChartOwnProps & LineChartConnectedProps;

export default LineChartProps;
