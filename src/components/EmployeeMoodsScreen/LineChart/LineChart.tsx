import React from 'react';
import {
  LineChart as LineChartRecharts,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
} from 'recharts';
import LineChartTickSvg from './LineChartTickSvg';
import LineChartProps from './LineChartProps';
import { withStyles } from '@material-ui/styles';
import styles from './LineChartStyles';

class LineChart extends React.Component<LineChartProps> {
  render() {
    const { moodIds, moods, classes } = this.props;

    const data = moodIds.map(moodId => {
      if (moodId === 'moodId0') {
        return {};
      } else {
        return { 気分: moods[moodId].weight };
      }
    });

    const CustomizedTicks = (props: any) => {
      const { x, y, payload } = props;
      return <LineChartTickSvg x={x} y={y} tick={payload.value} />;
    };

    return (
      <div className={classes.chartPosition}>
        <LineChartRecharts
          width={950}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 15,
            left: 35,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' tickLine={false} />
          <YAxis
            domain={['dataMin', 'dataMax']}
            ticks={[1, 2, 3, 4, 5]}
            tick={<CustomizedTicks />}
          />
          <Tooltip />
          <Line type='monotone' dataKey='気分' stroke='#2196f3' isAnimationActive={false} />
        </LineChartRecharts>
      </div>
    );
  }
}

export default withStyles(styles)(LineChart);
